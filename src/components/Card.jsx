import './Card.css'

function Card({ card, onEdit, onDelete, onDragStart, onDragEnd, onDragOver, onDrop }) {
  const formatCurrency = (value) => {
    if (!value) return 'R$ 0,00'
    const numericValue = parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.')) || 0
    return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const formatPhone = (phone) => {
    if (!phone) return ''
    const cleaned = phone.replace(/\D/g, '')
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
    }
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
    }
    return phone
  }

  return (
    <div
      className="card"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="card-header">
        <h4 className="card-name">{card.nome || 'Sem nome'}</h4>
        <div className="card-actions">
          <button
            className="card-action-btn edit-btn"
            onClick={onEdit}
            title="Editar"
          >
            ✏️
          </button>
          <button
            className="card-action-btn delete-btn"
            onClick={onDelete}
            title="Excluir"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="card-body">
        {card.telefone && (
          <div className="card-field">
            <span className="field-icon">📞</span>
            <span className="field-value">{formatPhone(card.telefone)}</span>
          </div>
        )}

        {card.produto && (
          <div className="card-field">
            <span className="field-icon">📦</span>
            <span className="field-value">{card.produto}</span>
          </div>
        )}

        {card.servico && (
          <div className="card-field">
            <span className="field-icon">⚙️</span>
            <span className="field-value">{card.servico}</span>
          </div>
        )}

        {card.valor && (
          <div className="card-field card-value">
            <span className="field-icon">💰</span>
            <span className="field-value value">{formatCurrency(card.valor)}</span>
          </div>
        )}

        {card.resumo && (
          <div className="card-resumo">
            <p>{card.resumo}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
