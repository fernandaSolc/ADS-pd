# Usar imagem oficial do Node.js
FROM node:23-alpine

# Instalar dependências necessárias
RUN apk add --no-cache curl

# Instalar dockerize para esperar serviços como o banco de dados
RUN curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64 -o /usr/local/bin/dockerize && \
    chmod +x /usr/local/bin/dockerize

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar apenas os arquivos necessários inicialmente
COPY package*.json ./

# Instalar dependências globais
 RUN npm install -g nodemon ts-node

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Copiar o script de inicialização para o container
COPY start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

# Expor a porta correta
EXPOSE 4000

# Script de inicialização
CMD ["sh", "/usr/local/bin/start.sh"]
