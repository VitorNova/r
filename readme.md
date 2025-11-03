# 🎯 CRM - Sistema de Gerenciamento Completo

Sistema CRM completo com múltiplas versões: controles de IA, sistema de cards e **Kanban Board integrado com Supabase**.

---

## 📱 Versões Disponíveis

### 1️⃣ **CRM Kanban** (RECOMENDADO) 🔥
**Arquivo:** `crm-kanban.html`

CRM visual estilo Kanban (tipo Trello) com drag & drop, integrado com banco de dados Supabase.

**Funcionalidades:**
- ✅ 6 colunas Kanban: Novo Lead, Contato, Proposta, Negociação, Ganho, Perdido
- ✅ Arraste e solte cards entre colunas
- ✅ Atualização automática no Supabase
- ✅ Modal para criar/editar leads
- ✅ Painel de estatísticas em tempo real
- ✅ Indicador de status de conexão
- ✅ Design responsivo e moderno
- ✅ Detecta automaticamente a estrutura da tabela

**Como usar:**
```bash
# Inicie um servidor local
python3 -m http.server 8080

# Acesse no navegador
http://localhost:8080/crm-kanban.html
```

---

### 2️⃣ **CRM com Cards e Supabase**
**Arquivo:** `crm-supabase.html`

Sistema de cards com todos os dados salvos na nuvem (Supabase).

**Funcionalidades:**
- Sistema de cards organizados
- Criar, editar e deletar clientes
- Campos: Nome, Telefone, Produto, Serviço, Valor, Resumo
- Dados na nuvem (Supabase)
- Painel de estatísticas

---

### 3️⃣ **CRM com Cards Local**
**Arquivo:** `crm-completo.html`

Sistema de cards com salvamento no navegador (localStorage).

**Funcionalidades:**
- Sistema de cards visual
- CRUD completo de clientes
- Salvamento local no navegador

---

### 4️⃣ **CRM com Controles de IA**
**Arquivos:** `crm.html`, `index.html`, `server.js`

Sistema com botões para controlar IA e campanhas de reengajamento.

**Funcionalidades:**
- Ativar/Pausar IA
- Ativar Mensagens de Reengajamento
- API backend com Node.js

---

## 🗄️ Configuração do Banco de Dados (Supabase)

### Credenciais
```
URL: https://uaepkqqgagcuvgitakiz.supabase.co
ANON KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Tabela: LeadboxCRM

O sistema se conecta automaticamente à tabela **LeadboxCRM** no Supabase.

**Campos sugeridos:**
- `id` (UUID, primary key)
- `name` (TEXT) - Nome do lead
- `phone` (TEXT) - Telefone
- `email` (TEXT) - Email
- `company` (TEXT) - Empresa
- `value` (TEXT) - Valor em R$
- `notes` (TEXT) - Observações
- `status` (TEXT) - Status (novo, contato, proposta, negociacao, ganho, perdido)
- `created_at` (TIMESTAMP) - Data de criação

### Scripts SQL

Use `supabase-setup.sql` para criar a estrutura completa no Supabase.

**Ver documentação completa:** `SUPABASE-SETUP.md`

---

## 🚀 Início Rápido (CRM Kanban)

### Passo 1: Verificar Tabela
```bash
# Abra check-table.html para ver a estrutura da sua tabela
http://localhost:8080/check-table.html
```

### Passo 2: Abrir CRM Kanban
```bash
python3 -m http.server 8080
# Acesse: http://localhost:8080/crm-kanban.html
```

### Passo 3: Usar o Sistema
1. Clique em "➕ Novo Lead"
2. Preencha os dados
3. Salve
4. Arraste cards entre as colunas
5. Os dados são salvos automaticamente no Supabase

---

## 🎨 Interface Kanban

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ 🆕 Novo     │ 📞 Contato  │ 📄 Proposta │ 💬 Negocia. │ ✅ Ganho    │ ❌ Perdido  │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ [Card 1]    │ [Card 4]    │             │ [Card 6]    │ [Card 7]    │             │
│ [Card 2]    │ [Card 5]    │             │             │ [Card 8]    │             │
│ [Card 3]    │             │             │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

---

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Backend:** Supabase (PostgreSQL)
- **API:** Supabase JavaScript Client v2
- **Drag & Drop:** HTML5 Drag and Drop API
- **Design:** CSS Gradientes, Animações, Responsivo

---

## 📊 Funcionalidades do Kanban

✅ **Drag & Drop Nativo**
- Arraste cards entre colunas
- Atualização instantânea no banco

✅ **Estatísticas em Tempo Real**
- Total de leads
- Leads novos
- Leads ganhos
- Valor total (R$)

✅ **CRUD Completo**
- Criar novos leads
- Editar leads existentes
- Deletar leads
- Visualizar detalhes

✅ **Adaptativo**
- Detecta automaticamente a estrutura da tabela
- Funciona com qualquer schema do Supabase

---

## 🐛 Solução de Problemas

### ❌ "Erro ao conectar"
- Verifique se as credenciais do Supabase estão corretas
- Verifique se a tabela LeadboxCRM existe

### ❌ "Permission denied"
- Configure as políticas RLS (Row Level Security) no Supabase
- Use o script `supabase-setup.sql`

### ❌ Cards não aparecem
- Abra `check-table.html` para verificar a estrutura
- Verifique se há dados na tabela

---

## 📁 Estrutura de Arquivos

```
/
├── crm-kanban.html          ⭐ CRM Kanban (RECOMENDADO)
├── crm-supabase.html        📦 CRM Cards com Supabase
├── crm-completo.html        💾 CRM Cards Local
├── crm.html                 🤖 CRM com IA (standalone)
├── check-table.html         🔍 Verificador de tabela
├── index.html               🎨 Interface IA
├── server.js                🖥️ Backend Node.js
├── supabase-setup.sql       📄 Script SQL
├── SUPABASE-SETUP.md        📚 Documentação
└── readme.md                📖 Este arquivo
```

---

## 🎯 Próximos Passos

- [ ] Adicionar filtros e busca
- [ ] Implementar autenticação de usuários
- [ ] Adicionar gráficos e dashboards
- [ ] Exportar dados (CSV, Excel)
- [ ] Notificações em tempo real (Supabase Realtime)
- [ ] Versão mobile (PWA)

---

## 📝 Licença

MIT

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ e ☕
