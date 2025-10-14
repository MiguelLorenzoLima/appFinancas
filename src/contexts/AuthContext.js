import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase, getCurrentUser, getCurrentSession } from '../config/supabase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // -- Verificar sessão inicial
    checkUser();

    // -- Listener de mudanças de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth event:', event);
        // session may be returned in different shapes depending on the SDK
        // normalize: try plain session or session.session
        const normalizedSession = session?.session ?? session ?? null;
        setSession(normalizedSession);
        setUser(normalizedSession?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      // First check if there's an active session to avoid AuthSessionMissingError
      const { session: sessionObj, error: sessionError } = await getCurrentSession();
      if (sessionError) throw sessionError;

      setSession(sessionObj);

      if (sessionObj) {
        // only try to get user when session exists
        const { user, error } = await getCurrentUser();
        if (error) throw error;
        setUser(user);
      } else {
        setUser(null);
      }
    } catch (error) {
      // AuthSessionMissingError is expected when no session exists; log less noisily
      if (error?.name === 'AuthSessionMissingError') {
        console.log('No active auth session');
      } else {
        console.error('Error checking user:', error);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    session,
    loading,
    signOut: async () => {
      // -- Fazer logout no Supabase
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};