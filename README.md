# CRM Kanban System 📊

Sistema CRM completo com interface Kanban estilo Trello/Komo para gerenciamento de pipeline de vendas.

## 🚀 Características

### Interface Kanban
- **6 Colunas de Funil de Vendas:**
  - Leads
  - Em Contato
  - Proposta Enviada
  - Negociação
  - Fechado
  - Perdido

### Funcionalidades dos Cards
Cada card contém os seguintes campos:
- 📝 **Nome** do cliente
- 📞 **Telefone** (com formatação automática)
- 📦 **Produto**
- ⚙️ **Serviço**
- 💰 **Valor** (com formatação monetária em R$)
- 📄 **Resumo do Atendimento**

### Recursos Principais
- ✅ **Drag and Drop** - Arraste cards entre colunas
- ✅ **Criar Cards** - Adicione novos cards em qualquer coluna
- ✅ **Editar Cards** - Atualize informações dos cards existentes
- ✅ **Excluir Cards** - Remova cards com confirmação
- ✅ **Salvamento Automático** - Dados salvos no localStorage
- ✅ **Total por Coluna** - Visualize o valor total de cada etapa
- ✅ **Contador de Cards** - Veja quantos cards há em cada coluna
- ✅ **Design Responsivo** - Funciona em desktop e mobile

## 📦 Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização moderna com gradientes e animações
- **LocalStorage** - Persistência de dados no navegador

## 🎯 Como Usar

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Uso do Sistema

1. **Adicionar um Card:**
   - Clique no botão "+ Adicionar Card" em qualquer coluna
   - Preencha os campos do formulário
   - Clique em "Criar Card"

2. **Editar um Card:**
   - Clique no ícone ✏️ no card desejado
   - Modifique os campos necessários
   - Clique em "Salvar Alterações"

3. **Mover Cards:**
   - Clique e segure o card
   - Arraste para a coluna desejada
   - Solte o card na nova posição

4. **Excluir um Card:**
   - Clique no ícone 🗑️ no card
   - Confirme a exclusão

5. **Visualizar Totais:**
   - Cada coluna mostra o valor total dos cards
   - O contador mostra quantos cards existem na coluna

## 🎨 Design

Interface moderna e intuitiva com:
- Gradientes elegantes (roxo/azul)
- Efeitos de hover e animações suaves
- Cards com bordas coloridas
- Modal responsivo para edição
- Scrollbars customizadas
- Layout totalmente responsivo

## 💾 Persistência de Dados

Todos os dados são automaticamente salvos no localStorage do navegador:
- Posições dos cards
- Dados dos cards
- Estado das colunas

Os dados persistem mesmo após fechar o navegador!

## 📱 Responsividade

O sistema é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (320px+)

## 🛠️ Estrutura do Projeto

```
/
├── src/
│   ├── components/
│   │   ├── KanbanBoard.jsx      # Board principal
│   │   ├── KanbanBoard.css
│   │   ├── Column.jsx            # Colunas do Kanban
│   │   ├── Column.css
│   │   ├── Card.jsx              # Cards individuais
│   │   ├── Card.css
│   │   ├── CardModal.jsx         # Modal de criação/edição
│   │   └── CardModal.css
│   ├── App.jsx                   # Componente principal
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos globais
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Próximos Passos (Futuras Melhorias)

- [ ] Backend com API REST
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Filtros e busca de cards
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Notificações e lembretes
- [ ] Tags e categorias personalizadas
- [ ] Histórico de mudanças
- [ ] Anexos de arquivos
- [ ] Modo escuro

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ usando React + Vite**
