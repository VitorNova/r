# 🎯 CRM - Sistema de Gerenciamento com IA

Sistema CRM moderno com controles de IA e mensagens de reengajamento.

## 🚀 Funcionalidades

- **Ativar IA**: Ativa o sistema de inteligência artificial
- **Pausar IA**: Pausa temporariamente a IA
- **Ativar Mensagens de Reengajamento**: Ativa campanhas de reengajamento de clientes

## 📋 Requisitos

- Node.js 14+
- npm ou yarn

## 🔧 Instalação

```bash
# Instalar dependências
npm install
```

## ▶️ Como Usar

### Modo Desenvolvimento

```bash
# Iniciar servidor
npm start
```

Acesse: `http://localhost:3000`

### Modo Produção

```bash
# Iniciar servidor de produção
NODE_ENV=production npm start
```

## 🎨 Interface

A interface possui:
- **Painel de Status**: Mostra o estado atual da IA e das mensagens de reengajamento
- **Painel de Controles**: Botões para controlar as funcionalidades
- **Registro de Atividades**: Log em tempo real das atividades do sistema

## 🔌 API Endpoints

### GET /api/state
Retorna o estado atual do sistema

### POST /api/state
Atualiza o estado do sistema

### POST /api/ia/activate
Ativa a IA

### POST /api/ia/pause
Pausa a IA

### POST /api/ia/resume
Retoma a IA

### POST /api/reengagement/toggle
Ativa/Desativa mensagens de reengajamento

### GET /api/logs
Retorna os logs de atividade

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- Express.js

## 📝 Licença

MIT

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️
