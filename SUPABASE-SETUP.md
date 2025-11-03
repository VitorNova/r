# 🚀 Configuração do CRM com Supabase

## 📋 Passo a Passo

### 1️⃣ Criar a Tabela no Supabase

1. Acesse seu projeto no Supabase: https://supabase.com
2. Vá em **SQL Editor** (no menu lateral esquerdo)
3. Clique em **New Query**
4. Copie e cole o conteúdo do arquivo `supabase-setup.sql`
5. Clique em **Run** (ou pressione Ctrl/Cmd + Enter)

### 2️⃣ Verificar se a tabela foi criada

1. Vá em **Table Editor** (no menu lateral)
2. Você deve ver a tabela `clients`
3. Clique nela para visualizar

### 3️⃣ Abrir o CRM

Abra o arquivo `crm-supabase.html` no navegador

---

## 🗂️ Estrutura da Tabela

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | ID único do cliente (gerado automaticamente) |
| `name` | TEXT | Nome do cliente |
| `phone` | TEXT | Telefone |
| `product` | TEXT | Produto |
| `service` | TEXT | Serviço |
| `value` | TEXT | Valor em R$ |
| `summary` | TEXT | Resumo do atendimento |
| `created_at` | TIMESTAMP | Data e hora de criação |

---

## 🔐 Políticas de Segurança (RLS)

O script cria as seguintes políticas:

✅ **SELECT** - Qualquer pessoa pode ler os dados
✅ **INSERT** - Qualquer pessoa pode criar novos registros
✅ **UPDATE** - Qualquer pessoa pode atualizar registros
✅ **DELETE** - Qualquer pessoa pode deletar registros

> **⚠️ ATENÇÃO:** Essas políticas permitem acesso total. Para produção, configure políticas mais restritivas com autenticação de usuários.

---

## 🧪 Testar a Configuração

Após executar o SQL:

1. Abra `crm-supabase.html` no navegador
2. Você deve ver "✅ Conectado ao Supabase" no header
3. Clique em "➕ Novo Cliente"
4. Preencha os campos e salve
5. O cliente deve aparecer como um card
6. Verifique no **Table Editor** do Supabase se o registro foi salvo

---

## 🐛 Solução de Problemas

### ❌ "Tabela clients não existe"

**Solução:** Execute o arquivo `supabase-setup.sql` no SQL Editor do Supabase

### ❌ "Erro na conexão"

**Solução:** Verifique se as credenciais no arquivo HTML estão corretas:
- SUPABASE_URL
- SUPABASE_ANON_KEY

### ❌ "Permission denied"

**Solução:** Verifique se as políticas RLS foram criadas corretamente. Execute novamente o arquivo SQL.

### ❌ Não consigo criar/editar/deletar

**Solução:**
1. Vá em **Authentication** > **Policies** no Supabase
2. Verifique se a tabela `clients` tem as 4 políticas criadas
3. Se não, execute o SQL novamente

---

## 📊 Recursos Disponíveis

✅ Criar novos clientes
✅ Editar clientes existentes
✅ Deletar clientes
✅ Visualização em cards
✅ Painel de estatísticas
✅ Salvamento automático no Supabase
✅ Interface moderna e responsiva

---

## 🔄 Próximos Passos (Opcional)

- [ ] Adicionar autenticação de usuários
- [ ] Implementar filtros e busca
- [ ] Adicionar paginação
- [ ] Exportar dados para CSV/Excel
- [ ] Adicionar dashboard com gráficos
- [ ] Implementar real-time updates (Supabase Realtime)

---

## 📝 Credenciais Atuais

```
URL: https://uaepkqqgagcuvgitakiz.supabase.co
ANON KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 💡 Dica

Use o **Table Editor** do Supabase para:
- Visualizar todos os clientes cadastrados
- Editar dados diretamente
- Exportar dados
- Ver estatísticas da tabela

---

Pronto! Seu CRM com Supabase está configurado! 🎉
