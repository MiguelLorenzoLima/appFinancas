<h1 align="center"> Finanças Pessoais | Codificar Aplicações para Dispositivos Móveis</h1>
<h3 align="center">Miguel Lorenzo Lima</h3>

<p align="center">
  Aplicativo mobile de controle financeiro pessoal desenvolvido com <b>React Native</b>, <b>Expo</b> e <b>Supabase</b>.<br/>
  Projeto criado durante as aulas de <b>Codificar Aplicações para Dispositivos Móveis</b>.
</p>

---

## Telas do Aplicativo

<p align="center">
  <img src="https://github.com/user-attachments/assets/a8ede8e0-ef63-43ac-b76d-362ed9855d06" width="230" />
  <img src="https://github.com/user-attachments/assets/47a353f8-dd25-4758-8059-6d5da32a9a50" width="230" />
  <img src="https://github.com/user-attachments/assets/f9a465d0-b62b-4b72-82be-6d366a1fe29d" width="230" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/dd93ae6f-66ef-4ecc-abb9-0f61c1a1970c" width="230" />
  <img src="https://github.com/user-attachments/assets/f5f1b487-3faf-4ed9-acf7-368f3bac76b7" width="230" />
  <img src="https://github.com/user-attachments/assets/c756703b-b9ff-4a8f-8419-53be1da8f921" width="230" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/cf52cc55-8f65-42f4-8b9a-6b9beb94480b" width="230" />
</p>

---

## Funcionalidades

### Sistema de Autenticação
- Login e cadastro de usuários  
- Autenticação segura com Supabase  
- Persistência de sessão  
- Recuperação de senha  

### Dashboard Inicial
- Visualização do saldo atual (receitas - despesas)  
- Gráfico de pizza com distribuição de receitas e despesas  
- Cards com totais de receitas e despesas  
- Lista de transações recentes  
- Destaques de maior despesa e categoria mais usada  
- Atualização em tempo real com pull-to-refresh  

### Cadastro de Despesas
- Formulário intuitivo para inserir despesas  
- Campos: valor, descrição, categoria, data  
- Upload de comprovantes (imagens/PDFs) no Supabase Storage  
- Seleção visual de categorias com ícones e cores  
- Validação de dados  
- Download de comprovantes na listagem  

### Cadastro de Receitas
- Inserção de receitas com formulário simples  
- Campos: valor, descrição, categoria, data  
- Upload e download de comprovantes  
- Categorias específicas para receitas  
- Interface diferenciada por cores  

### Gerenciamento de Categorias
- Criação, edição e exclusão de categorias  
- Escolha de ícones e cores  
- Separação entre categorias de receita e despesa  
- Categorias padrão criadas automaticamente  

### Listagem de Transações
- Visualização de todas as transações  
- Filtros por tipo (todas, receitas, despesas)  
- Ordenação por data  
- Exclusão com confirmação  
- Download de comprovantes disponíveis  
- Interface responsiva e intuitiva  

### Design Responsivo
- Interface adaptada para diferentes tamanhos de tela  
- Componentes otimizados para mobile  
- Feedback visual e animações suaves  
- Paleta de cores moderna e agradável  

---

## Tecnologias Utilizadas

### Frontend
- React Native  
- Expo  
- TypeScript  
- Expo Router  
- React Native Chart Kit  

### Backend
- Supabase (Auth, PostgreSQL, Storage, RLS)  

### Bibliotecas Adicionais
- `@react-native-async-storage/async-storage` — Armazenamento local  
- `expo-document-picker` — Seleção de arquivos  
- `expo-file-system` — Manipulação de arquivos  
- `expo-sharing` — Compartilhamento  
- `react-native-blob-util` — Download e upload  
- `react-native-svg` — Renderização de gráficos  

---

## Arquitetura e Boas Práticas

### Orientação a Objetos
Classes principais:
- **User**: representa um usuário do sistema  
- **Transaction**: representa uma transação financeira  
- **Category**: representa uma categoria  

Cada classe possui propriedades tipadas, métodos de instância, métodos estáticos e encapsulamento da lógica de negócio.

### Camada de Serviços
- **AuthService** — autenticação e sessões  
- **TransactionService** — CRUD e cálculos de transações  
- **CategoryService** — CRUD de categorias  
- **StatisticsService** — cálculos e estatísticas  

### Context API
- **AuthContext** — gerenciamento global do estado de autenticação  

---

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)  
- npm ou yarn  
- Expo CLI  
- Conta no Supabase  

### Passo 1: Clonar o Repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd financas-pessoais
