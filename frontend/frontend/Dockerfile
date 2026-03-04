# Usa imagem oficial do Node
FROM node:18

# Define pasta de trabalho
WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o resto do projeto
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para rodar o projeto
CMD ["npm", "run", "dev", "--", "--host"]