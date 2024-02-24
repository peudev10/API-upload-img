# API de Upload de Imagens com Node.js, MySQL e Express

## Descrição do Projeto

Esta API foi desenvolvida para possibilitar o upload de imagens com título e descrição. O sistema inclui um filtro que verifica se o arquivo enviado é uma imagem válida. As tecnologias principais utilizadas são Node.js, MySQL e Express.

## Funcionalidades

1. **Upload de Imagem:**
   - Permite o envio de imagens para o servidor.

2. **Filtro de Tipo de Arquivo:**
   - Garante que apenas arquivos de imagem são aceitos.

3. **Atualização de Título e Descrição:**
   - Oferece a funcionalidade de atualizar o título e a descrição das imagens.
  
4. **Apagar Imagens Enviadas:**
   - Oferece a funcionalidade de apagar imagens.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no lado do servidor.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional.
- **Express:** Framework web para Node.js, simplificando a criação de APIs.

## Configuração do Projeto

1. **Criação de Arquivo `.env`:**
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes informações:
     ```env
     PORT=3000
     MSQL_HOST=seu_host_mysql
     MSQL_USER=seu_usuario_mysql
     MSQL_PASSWORD=sua_senha_mysql
     MSQL_DB=upload
     ```

2. **Configuração do Banco de Dados:**
   - Crie um banco de dados MySQL chamado `upload`.

3. **Instalação de Dependências:**
   ```bash
   npm install


## Endpoints

### 1. GET /imagens

- **Descrição:** Retorna as imagens da pasta `img_upload`.
- **Exemplo de Uso:** `/imagens/nome-da-imagem.jpg`

### 2. POST /upload

- **Descrição:** Realiza o upload de um arquivo de imagem.
- **Parâmetros do Formulário:**
  - `titulo`: Título da imagem.
  - `descricao`: Descrição da imagem.
  - `file`: Arquivo de imagem a ser enviado.
- **Exemplo de Uso:** `/upload`

### 3. GET /upload

- **Descrição:** Retorna todas as imagens armazenadas no banco de dados.
- **Exemplo de Uso:** `/upload`

### 4. DELETE /upload/:id

- **Descrição:** Deleta uma imagem específica com base no ID fornecido.
- **Parâmetros da URL:**
  - `id`: ID da imagem a ser deletada.
- **Exemplo de Uso:** `/upload/1`

### 5. PUT /upload/:id

- **Descrição:** Faz o upload do título e/ou da descrição de uma imagem específica com base no ID fornecido.
- **Parâmetros da URL:**
  - `id`: ID da imagem a ser atualizada.
- **Parâmetros do Corpo (JSON):**
  - `title` (opcional): Novo título da imagem.
  - `description` (opcional): Nova descrição da imagem.
- **Exemplo de Uso:** `/upload/1`



