# Script: atualizar-app.ps1
# Automatiza o processo de build e reinicialização do OpenEyes (Uptime Kuma)

Write-Host "Parando servidores frontend e backend..."
# Tenta parar processos npm (ajuste se usar pm2, docker, etc)
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue

Write-Host "Executando build do frontend..."
npm run build

Write-Host "Subindo backend (produção)..."
# Ajuste o comando abaixo se usar outro para o backend
npm run start-server

# Descomente a linha abaixo se quiser subir o frontend dev também
# Write-Host "Subindo frontend em modo desenvolvimento..."
# npm run start-frontend-dev

Write-Host "Processo concluído! Dê um hard refresh no navegador (Ctrl+F5)." 