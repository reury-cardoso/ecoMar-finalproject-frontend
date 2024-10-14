# ECOMAR - Plataforma de Coleta de Resíduos Marítimos

O **ECOMAR** é uma plataforma inovadora desenvolvida para conectar comunidades e facilitar a gestão e incentivo à coleta de resíduos marítimos. O sistema foi criado como parte do Módulo 05 do programa **Programadores do Amanhã**.

<p align="center">
  <img alt="projeto" src=".github/preview.jpg" width="100%">
</p>

## 🖥 Deploy

Você pode acessar a aplicação em funcionamento através deste link:  
**[ECOMAR - Deploy](https://ecomar.vercel.app/)**

## 🚀 Tecnologias Utilizadas

- **React.js**: Framework para o desenvolvimento do frontend.
- **Node.js**: Utilizado no backend para o gerenciamento da API.
- **Express.js**: Framework para criação da API REST.
- **Tailwind CSS**: Para estilização da interface de usuário, oferecendo um design responsivo e moderno.
- **Vercel**: Deploy da aplicação frontend.
- **GitHub**: Repositório e versionamento do código.

## ⚙️ Funcionalidades

- **Cadastro e Gerenciamento de Pontos de Coleta**: Usuários podem registrar e favoritar pontos de coleta de lixo marítimo, com filtros por localização e tipo de resíduo.
- **Eventos de Coleta**: Criação e inscrição em eventos comunitários, como mutirões e ações educativas.
- **Favoritar Eventos e Pontos de Coleta**: Usuários podem salvar seus pontos e eventos favoritos para fácil acesso.
- **Gerenciamento por Administradores**: Aprovação e gerenciamento dos pontos de coleta e eventos cadastrados pela comunidade.

## 🔧 Instalação Local

Siga as instruções abaixo para rodar o projeto localmente:

### 1. Clonar o repositório

Clone o repositório do frontend para sua máquina:

```bash
git clone https://github.com/reury-cardoso/ecoMar-finalproject-frontend.git
cd ecoMar-finalproject-frontend
```

### 2. Instalar dependências

Instale as dependências necessárias:

```bash
npm install
```

### 3. Configurar o Frontend

Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

```
VITE_API_URL=http://localhost:3000
```

### 4. Rodar o Frontend

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará disponível na URL local informada pelo terminal.

### Configurar o Backend

1. Clone este repositório:
```bash
git clone https://github.com/ste-coding/backend-projeto-final-M5.git
cd backend-projeto-final-M5
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto e defina as variáveis ​​de ambiente conforme mostrado em `.env_EXAMPLE`:

4. Execute migrações de banco de dados (assumindo que você tenha o Sequelize CLI instalado):
```bash
npm run migrate
```

5. Inicie o servidor:
```bash
npm run dev
```

## Endpoints
Base URL

`http://localhost:3000`

## Endpoints da API

A API oferece os seguintes endpoints para gerenciar a coleta de resíduos:

- `GET /events`: Buscar todos os eventos de coleta.
- `POST /events`: Criar um novo evento de coleta.
- `GET /points`: Buscar todos os pontos de coleta.
- `POST /points`: Criar um novo ponto de coleta.

## 📝 License

Este projeto é licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

## Desenvolvedores da Squad ���‍���
<table>
<tr>
  <td align='center'>
    <a href='https://github.com/guilhermevnbraga'>
      <img src='https://avatars.githubusercontent.com/u/89932943' width='115' alt='Guilherme Braga'/><br />
      <sub><b>Guilherme Braga</b></sub>
    </a>
  </td>
  <td align='center'>
    <a href='https://github.com/Oisaa2'>
      <img src='https://avatars.githubusercontent.com/u/154278249' width='115' alt='Oisaa2'/><br />
      <sub><b>Isabela Karoline</b></sub>
    </a>
  </td>
  <td align='center'>
    <a href='https://github.com/reury-cardoso'>
      <img src='https://avatars.githubusercontent.com/u/90332711' width='115' alt='Reury Cardoso'/><br />
      <sub><b>Reury Cardoso</b></sub>
    </a>
  </td>
  <td align='center'>
    <a href='https://github.com/WesleyBatistaSouza'>
      <img src='https://avatars.githubusercontent.com/u/108181021' width='115' alt='wesley batista'/><br />
      <sub><b>Wesley Batista</b></sub>
    </a>
  </td>
</tr>
</table>
