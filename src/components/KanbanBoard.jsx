import { useState } from 'react'
import Column from './Column'
import './KanbanBoard.css'

function KanbanBoard({ columns, onAddCard, onUpdateCard, onDeleteCard, onMoveCard }) {
  const [draggedCard, setDraggedCard] = useState(null)
  const [draggedFromColumn, setDraggedFromColumn] = useState(null)

  const handleDragStart = (e, card, columnId) => {
    setDraggedCard(card)
    setDraggedFromColumn(columnId)
    e.dataTransfer.effectAllowed = 'move'
    e.target.style.opacity = '0.5'
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1'
    setDraggedCard(null)
    setDraggedFromColumn(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, targetColumnId, targetIndex) => {
    e.preventDefault()
    e.stopPropagation()

    if (!draggedCard || !draggedFromColumn) return

    if (draggedFromColumn !== targetColumnId || targetIndex !== undefined) {
      onMoveCard(draggedCard.id, draggedFromColumn, targetColumnId, targetIndex || 0)
    }
  }

  return (
    <div className="kanban-board">
      {columns.map(column => (
        <Column
          key={column.id}
          column={column}
          onAddCard={onAddCard}
          onUpdateCard={onUpdateCard}
          onDeleteCard={onDeleteCard}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  )
}

export default KanbanBoard
