const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Estado do sistema (em produção, use um banco de dados)
let systemState = {
    iaActive: false,
    iaPaused: false,
    reengagementActive: false,
    lastUpdate: new Date()
};

// Logs de atividade
let activityLogs = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API: Obter estado atual
app.get('/api/state', (req, res) => {
    res.json({
        success: true,
        data: systemState
    });
});

// API: Atualizar estado
app.post('/api/state', (req, res) => {
    const { iaActive, iaPaused, reengagementActive } = req.body;

    // Validação básica
    if (typeof iaActive !== 'boolean' ||
        typeof iaPaused !== 'boolean' ||
        typeof reengagementActive !== 'boolean') {
        return res.status(400).json({
            success: false,
            message: 'Dados inválidos'
        });
    }

    // Atualiza o estado
    systemState = {
        iaActive,
        iaPaused,
        reengagementActive,
        lastUpdate: new Date()
    };

    // Adiciona log
    addActivityLog('Estado do sistema atualizado');

    res.json({
        success: true,
        data: systemState
    });
});

// API: Ativar IA
app.post('/api/ia/activate', (req, res) => {
    systemState.iaActive = true;
    systemState.iaPaused = false;
    systemState.lastUpdate = new Date();

    addActivityLog('IA ativada');

    res.json({
        success: true,
        message: 'IA ativada com sucesso',
        data: systemState
    });
});

// API: Pausar IA
app.post('/api/ia/pause', (req, res) => {
    if (!systemState.iaActive) {
        return res.status(400).json({
            success: false,
            message: 'IA não está ativa'
        });
    }

    systemState.iaPaused = true;
    systemState.lastUpdate = new Date();

    addActivityLog('IA pausada');

    res.json({
        success: true,
        message: 'IA pausada com sucesso',
        data: systemState
    });
});

// API: Retomar IA
app.post('/api/ia/resume', (req, res) => {
    if (!systemState.iaActive || !systemState.iaPaused) {
        return res.status(400).json({
            success: false,
            message: 'IA não está pausada'
        });
    }

    systemState.iaPaused = false;
    systemState.lastUpdate = new Date();

    addActivityLog('IA retomada');

    res.json({
        success: true,
        message: 'IA retomada com sucesso',
        data: systemState
    });
});

// API: Ativar/Desativar mensagens de reengajamento
app.post('/api/reengagement/toggle', (req, res) => {
    systemState.reengagementActive = !systemState.reengagementActive;
    systemState.lastUpdate = new Date();

    const status = systemState.reengagementActive ? 'ativadas' : 'desativadas';
    addActivityLog(`Mensagens de reengajamento ${status}`);

    res.json({
        success: true,
        message: `Mensagens de reengajamento ${status}`,
        data: systemState
    });
});

// API: Obter logs de atividade
app.get('/api/logs', (req, res) => {
    const limit = parseInt(req.query.limit) || 50;
    res.json({
        success: true,
        data: activityLogs.slice(0, limit)
    });
});

// Função auxiliar para adicionar log
function addActivityLog(message) {
    const log = {
        timestamp: new Date(),
        message: message
    };

    activityLogs.unshift(log);

    // Limita a 100 logs
    if (activityLogs.length > 100) {
        activityLogs = activityLogs.slice(0, 100);
    }
}

// Simulação de atividade da IA
setInterval(() => {
    if (systemState.iaActive && !systemState.iaPaused) {
        const activities = [
            'IA processando leads',
            'IA analisando dados de clientes',
            'IA gerando respostas automáticas',
            'IA identificando oportunidades'
        ];
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        addActivityLog(randomActivity);
    }

    if (systemState.reengagementActive) {
        if (Math.random() > 0.7) {
            const activities = [
                'Enviando mensagem de reengajamento',
                'Cliente reengajado com sucesso',
                'Campanha de reengajamento em andamento'
            ];
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            addActivityLog(randomActivity);
        }
    }
}, 5000);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor CRM rodando em http://localhost:${PORT}`);
    console.log(`📊 Estado inicial: IA ${systemState.iaActive ? 'Ativa' : 'Inativa'}`);
    addActivityLog('Servidor CRM inicializado');
});
