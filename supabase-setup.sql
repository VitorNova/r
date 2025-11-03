-- =====================================================
-- CRM - Script de Criação da Tabela no Supabase
-- =====================================================

-- Criar tabela de clientes
CREATE TABLE IF NOT EXISTS clients (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    product TEXT NOT NULL,
    service TEXT NOT NULL,
    value TEXT NOT NULL,
    summary TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Habilitar RLS (Row Level Security) - IMPORTANTE!
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir SELECT (leitura) para todos
CREATE POLICY "Permitir leitura para todos"
ON clients FOR SELECT
USING (true);

-- Criar política para permitir INSERT (criação) para todos
CREATE POLICY "Permitir criação para todos"
ON clients FOR INSERT
WITH CHECK (true);

-- Criar política para permitir UPDATE (atualização) para todos
CREATE POLICY "Permitir atualização para todos"
ON clients FOR UPDATE
USING (true);

-- Criar política para permitir DELETE (exclusão) para todos
CREATE POLICY "Permitir exclusão para todos"
ON clients FOR DELETE
USING (true);

-- Criar índice para melhorar performance de ordenação por data
CREATE INDEX IF NOT EXISTS idx_clients_created_at ON clients(created_at DESC);

-- Verificar se tudo foi criado corretamente
SELECT
    'Tabela criada com sucesso! ✅' as status,
    COUNT(*) as total_clientes
FROM clients;
