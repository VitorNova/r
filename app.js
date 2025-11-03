// Estado do sistema
let systemState = {
    iaActive: false,
    iaPaused: false,
    reengagementActive: false
};

// Elementos DOM
const btnActivateIA = document.getElementById('btn-activate-ia');
const btnPauseIA = document.getElementById('btn-pause-ia');
const btnActivateReengagement = document.getElementById('btn-activate-reengagement');
const iaStatus = document.getElementById('ia-status');
const reengagementStatus = document.getElementById('reengagement-status');
const activityLog = document.getElementById('activity-log');

// Função para adicionar log de atividade
function addLog(message, type = 'info') {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR');

    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
        <span class="log-time">${time}</span>
        <span class="log-message">${message}</span>
    `;

    // Adiciona no topo do log
    activityLog.insertBefore(logEntry, activityLog.firstChild);

    // Limita a 50 entradas
    while (activityLog.children.length > 50) {
        activityLog.removeChild(activityLog.lastChild);
    }
}

// Função para atualizar status visual
function updateIAStatus() {
    if (systemState.iaActive && !systemState.iaPaused) {
        iaStatus.textContent = 'Ativa';
        iaStatus.className = 'status-value active';
    } else if (systemState.iaPaused) {
        iaStatus.textContent = 'Pausada';
        iaStatus.className = 'status-value paused';
    } else {
        iaStatus.textContent = 'Inativa';
        iaStatus.className = 'status-value inactive';
    }
}

function updateReengagementStatus() {
    if (systemState.reengagementActive) {
        reengagementStatus.textContent = 'Ativas';
        reengagementStatus.className = 'status-value active';
    } else {
        reengagementStatus.textContent = 'Inativas';
        reengagementStatus.className = 'status-value inactive';
    }
}

// Função para atualizar botões
function updateButtons() {
    if (systemState.iaActive && !systemState.iaPaused) {
        btnActivateIA.disabled = true;
        btnPauseIA.disabled = false;
        btnActivateIA.textContent = '✓ IA Ativa';
    } else if (systemState.iaPaused) {
        btnActivateIA.disabled = false;
        btnActivateIA.innerHTML = '<span class="btn-icon">🔄</span><span class="btn-text">Retomar IA</span>';
        btnPauseIA.disabled = false;
        btnPauseIA.textContent = '✓ IA Pausada';
    } else {
        btnActivateIA.disabled = false;
        btnActivateIA.innerHTML = '<span class="btn-icon">🤖</span><span class="btn-text">Ativar IA</span>';
        btnPauseIA.disabled = true;
        btnPauseIA.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-text">Pausar IA</span>';
    }

    if (systemState.reengagementActive) {
        btnActivateReengagement.disabled = true;
        btnActivateReengagement.innerHTML = '<span class="btn-icon">✓</span><span class="btn-text">Reengajamento Ativo</span>';
        btnActivateReengagement.className = 'btn btn-success';
    } else {
        btnActivateReengagement.disabled = false;
        btnActivateReengagement.innerHTML = '<span class="btn-icon">📨</span><span class="btn-text">Ativar Mensagens de Reengajamento</span>';
        btnActivateReengagement.className = 'btn btn-primary';
    }
}

// Handler: Ativar IA
btnActivateIA.addEventListener('click', async () => {
    if (systemState.iaPaused) {
        // Retomar IA
        systemState.iaPaused = false;
        addLog('✅ IA retomada com sucesso', 'success');
        updateIAStatus();
        updateButtons();

        // Simula chamada à API
        await saveState();
    } else {
        // Ativar IA
        systemState.iaActive = true;
        systemState.iaPaused = false;
        addLog('✅ IA ativada com sucesso', 'success');
        updateIAStatus();
        updateButtons();

        // Simula chamada à API
        await saveState();
    }
});

// Handler: Pausar IA
btnPauseIA.addEventListener('click', async () => {
    systemState.iaPaused = true;
    addLog('⏸️ IA pausada', 'warning');
    updateIAStatus();
    updateButtons();

    // Simula chamada à API
    await saveState();
});

// Handler: Ativar Mensagens de Reengajamento
btnActivateReengagement.addEventListener('click', async () => {
    if (systemState.reengagementActive) {
        // Desativar
        systemState.reengagementActive = false;
        addLog('🔴 Mensagens de reengajamento desativadas', 'info');
    } else {
        // Ativar
        systemState.reengagementActive = true;
        addLog('✅ Mensagens de reengajamento ativadas', 'success');
    }

    updateReengagementStatus();
    updateButtons();

    // Simula chamada à API
    await saveState();
});

// Função para salvar estado (simulação de API)
async function saveState() {
    try {
        // Aqui você faria uma chamada real à API
        // const response = await fetch('/api/state', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(systemState)
        // });

        // Por enquanto, salva no localStorage
        localStorage.setItem('crmState', JSON.stringify(systemState));
        console.log('Estado salvo:', systemState);
    } catch (error) {
        console.error('Erro ao salvar estado:', error);
        addLog('❌ Erro ao salvar configurações', 'error');
    }
}

// Função para carregar estado
function loadState() {
    try {
        const saved = localStorage.getItem('crmState');
        if (saved) {
            systemState = JSON.parse(saved);
            updateIAStatus();
            updateReengagementStatus();
            updateButtons();
            addLog('📂 Configurações anteriores carregadas', 'info');
        }
    } catch (error) {
        console.error('Erro ao carregar estado:', error);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    addLog('🚀 Sistema CRM inicializado', 'info');
    loadState();
});

// Adiciona alguns logs de exemplo (simulação de atividade)
setInterval(() => {
    if (systemState.iaActive && !systemState.iaPaused) {
        const messages = [
            '🤖 IA processando leads...',
            '📊 IA analisando dados de clientes...',
            '💬 IA gerando respostas automáticas...',
            '🎯 IA identificando oportunidades...'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        addLog(randomMessage, 'info');
    }

    if (systemState.reengagementActive) {
        const reengagementMessages = [
            '📨 Enviando mensagem de reengajamento...',
            '🔔 Cliente reengajado com sucesso',
            '💌 Campanha de reengajamento em andamento...'
        ];
        if (Math.random() > 0.7) { // 30% de chance
            const randomMessage = reengagementMessages[Math.floor(Math.random() * reengagementMessages.length)];
            addLog(randomMessage, 'info');
        }
    }
}, 5000); // A cada 5 segundos
