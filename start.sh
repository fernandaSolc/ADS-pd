#!/bin/sh

# Aguardar até que o PostgreSQL esteja pronto
echo "Aguardando o PostgreSQL iniciar..."
dockerize -wait tcp://postgres:5432 -timeout 120s

# Verificar o ambiente e iniciar a aplicação
if [ "$NODE_ENV" = "development" ]; then
  echo "Iniciando em modo de desenvolvimento..."
  nodemon --watch src --ext ts,json --exec ts-node src/main.ts
else
  echo "Iniciando em modo de produção..."
  node dist/main
fi
