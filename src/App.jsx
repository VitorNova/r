import { useState, useEffect } from 'react'
import KanbanBoard from './components/KanbanBoard'
import './App.css'

function App() {
  const [columns, setColumns] = useState([
    { id: 'leads', title: 'Leads', cards: [] },
    { id: 'contato', title: 'Em Contato', cards: [] },
    { id: 'proposta', title: 'Proposta Enviada', cards: [] },
    { id: 'negociacao', title: 'Negociação', cards: [] },
    { id: 'fechado', title: 'Fechado', cards: [] },
    { id: 'perdido', title: 'Perdido', cards: [] }
  ])

  // Carregar dados do localStorage
  useEffect(() => {
    const savedColumns = localStorage.getItem('kanban-columns')
    if (savedColumns) {
      setColumns(JSON.parse(savedColumns))
    }
  }, [])

  // Salvar dados no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('kanban-columns', JSON.stringify(columns))
  }, [columns])

  const addCard = (columnId, cardData) => {
    const newCard = {
      id: Date.now().toString(),
      ...cardData,
      createdAt: new Date().toISOString()
    }

    setColumns(prevColumns =>
      prevColumns.map(col =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, newCard] }
          : col
      )
    )
  }

  const updateCard = (columnId, cardId, cardData) => {
    setColumns(prevColumns =>
      prevColumns.map(col =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map(card =>
                card.id === cardId ? { ...card, ...cardData } : card
              )
            }
          : col
      )
    )
  }

  const deleteCard = (columnId, cardId) => {
    setColumns(prevColumns =>
      prevColumns.map(col =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter(card => card.id !== cardId) }
          : col
      )
    )
  }

  const moveCard = (cardId, fromColumnId, toColumnId, newIndex) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns]
      const fromColumn = newColumns.find(col => col.id === fromColumnId)
      const toColumn = newColumns.find(col => col.id === toColumnId)

      const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId)
      const [card] = fromColumn.cards.splice(cardIndex, 1)

      toColumn.cards.splice(newIndex, 0, card)

      return newColumns
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>CRM Kanban</h1>
        <p>Gerencie seu pipeline de vendas</p>
      </header>
      <KanbanBoard
        columns={columns}
        onAddCard={addCard}
        onUpdateCard={updateCard}
        onDeleteCard={deleteCard}
        onMoveCard={moveCard}
      />
    </div>
  )
}

export default App
