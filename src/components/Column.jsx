import { useState } from 'react'
import Card from './Card'
import CardModal from './CardModal'
import './Column.css'

function Column({
  column,
  onAddCard,
  onUpdateCard,
  onDeleteCard,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}) {
  const [showModal, setShowModal] = useState(false)
  const [editingCard, setEditingCard] = useState(null)

  const handleAddCard = () => {
    setEditingCard(null)
    setShowModal(true)
  }

  const handleEditCard = (card) => {
    setEditingCard(card)
    setShowModal(true)
  }

  const handleSaveCard = (cardData) => {
    if (editingCard) {
      onUpdateCard(column.id, editingCard.id, cardData)
    } else {
      onAddCard(column.id, cardData)
    }
    setShowModal(false)
    setEditingCard(null)
  }

  const handleDeleteCard = (cardId) => {
    if (window.confirm('Tem certeza que deseja excluir este card?')) {
      onDeleteCard(column.id, cardId)
    }
  }

  const handleDragOverColumn = (e) => {
    e.preventDefault()
    onDragOver(e)
  }

  const handleDropOnColumn = (e) => {
    onDrop(e, column.id, column.cards.length)
  }

  const getTotalValue = () => {
    return column.cards.reduce((sum, card) => {
      const value = parseFloat(card.valor?.replace(/[^\d,]/g, '').replace(',', '.')) || 0
      return sum + value
    }, 0)
  }

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <>
      <div
        className="column"
        onDragOver={handleDragOverColumn}
        onDrop={handleDropOnColumn}
      >
        <div className="column-header">
          <h3>{column.title}</h3>
          <span className="card-count">{column.cards.length}</span>
        </div>

        <div className="column-total">
          Total: {formatCurrency(getTotalValue())}
        </div>

        <div className="column-cards">
          {column.cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              onEdit={() => handleEditCard(card)}
              onDelete={() => handleDeleteCard(card.id)}
              onDragStart={(e) => onDragStart(e, card, column.id)}
              onDragEnd={onDragEnd}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, column.id, index)}
            />
          ))}
        </div>

        <button className="add-card-btn" onClick={handleAddCard}>
          + Adicionar Card
        </button>
      </div>

      {showModal && (
        <CardModal
          card={editingCard}
          onSave={handleSaveCard}
          onClose={() => {
            setShowModal(false)
            setEditingCard(null)
          }}
        />
      )}
    </>
  )
}

export default Column
