import { useState, useEffect } from 'react'
import './CardModal.css'

function CardModal({ card, onSave, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    produto: '',
    servico: '',
    valor: '',
    resumo: ''
  })

  useEffect(() => {
    if (card) {
      setFormData({
        nome: card.nome || '',
        telefone: card.telefone || '',
        produto: card.produto || '',
        servico: card.servico || '',
        valor: card.valor || '',
        resumo: card.resumo || ''
      })
    }
  }, [card])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nome.trim()) {
      alert('Por favor, preencha o nome do cliente')
      return
    }
    onSave(formData)
  }

  const formatPhoneInput = (value) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneInput(e.target.value)
    setFormData(prev => ({ ...prev, telefone: formatted }))
  }

  const formatCurrencyInput = (value) => {
    const cleaned = value.replace(/\D/g, '')
    const number = parseFloat(cleaned) / 100
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const handleCurrencyChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value)
    setFormData(prev => ({ ...prev, valor: formatted }))
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{card ? 'Editar Card' : 'Novo Card'}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="nome">Nome do Cliente *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome do cliente"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handlePhoneChange}
              placeholder="(00) 00000-0000"
              maxLength="15"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="produto">Produto</label>
              <input
                type="text"
                id="produto"
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                placeholder="Nome do produto"
              />
            </div>

            <div className="form-group">
              <label htmlFor="servico">Serviço</label>
              <input
                type="text"
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                placeholder="Tipo de serviço"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              id="valor"
              name="valor"
              value={formData.valor}
              onChange={handleCurrencyChange}
              placeholder="R$ 0,00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resumo">Resumo do Atendimento</label>
            <textarea
              id="resumo"
              name="resumo"
              value={formData.resumo}
              onChange={handleChange}
              placeholder="Digite um resumo do atendimento..."
              rows="4"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              {card ? 'Salvar Alterações' : 'Criar Card'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardModal
