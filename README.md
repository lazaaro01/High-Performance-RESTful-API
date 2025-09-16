# 🚀 High Performance RESTful API

Uma API RESTful de alta performance construída com Node.js, TypeScript e Express, otimizada para escalabilidade e performance através de clustering, cache Redis e logging estruturado.

## ✨ Características

- **🔥 Alta Performance**: Implementação com clustering para aproveitar todos os cores do CPU
- **⚡ Cache Redis**: Integração com Redis para cache de alta velocidade
- **📊 Logging Estruturado**: Sistema de logs com Pino para monitoramento eficiente
- **🛡️ Segurança**: Middlewares de segurança com Helmet e CORS
- **🔧 TypeScript**: Desenvolvimento type-safe com validação Zod
- **🐳 Docker**: Containerização para deploy consistente
- **☁️ Vercel Ready**: Configurado para deploy na Vercel
- **📦 Compressão**: Middleware de compressão para otimização de resposta

## 🏗️ Arquitetura

```
src/
├── app.ts                 # Configuração principal da aplicação
├── server.ts              # Servidor com clustering
├── config/
│   └── db.ts             # Configuração do banco de dados
├── controllers/
│   └── userController.ts  # Controladores de usuário
├── middlewares/
│   └── errorHandler.ts    # Middleware de tratamento de erros
├── models/
│   └── userModel.ts       # Modelo de dados do usuário
├── routes/
│   └── userRoutes.ts      # Rotas da API
├── schemas/
│   └── userSchema.ts      # Validação com Zod
├── services/
│   └── userService.ts     # Lógica de negócio
└── utils/
    ├── logger.ts          # Configuração do logger
    ├── redis.ts           # Cliente Redis
    └── validate.ts        # Utilitários de validação
```

## 🚀 Tecnologias

### Core
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web minimalista

### Performance & Escalabilidade
- **Cluster** - Multiprocessamento para aproveitar todos os cores
- **Redis** - Cache em memória para alta performance
- **Compression** - Compressão gzip para otimização de resposta

### Desenvolvimento & Qualidade
- **Zod** - Validação de schemas e tipos
- **Pino** - Logger de alta performance
- **Helmet** - Middleware de segurança
- **CORS** - Cross-Origin Resource Sharing

### Deploy & Infraestrutura
- **Docker** - Containerização
- **Vercel** - Deploy serverless

## 📋 Pré-requisitos

- Node.js 18+ 
- Redis Server
- Docker (opcional)

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <https://github.com/lazaaro01/High-Performance-RESTful-API.git>
cd high-performance
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
PORT=5000
NODE_ENV=development
REDIS_URL=redis://localhost:6379
```

4. **Inicie o Redis** (se não estiver rodando)
```bash
# Com Docker
docker run -d -p 6379:6379 redis:alpine

# Ou instale localmente
# Ubuntu/Debian: sudo apt-get install redis-server
# macOS: brew install redis
```

5. **Execute a aplicação**
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## 🐳 Docker

```bash
# Build da imagem
docker build -t high-performance-api .

# Executar container
docker run -p 5000:5000 high-performance-api
```

## 📚 API Endpoints

### Usuários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/users` | Lista todos os usuários |
| GET | `/users/:id` | Busca usuário por ID |
| POST | `/users` | Cria novo usuário |

### Exemplos de Uso

**Listar usuários:**
```bash
curl http://localhost:5000/users
```

**Buscar usuário:**
```bash
curl http://localhost:5000/users/1
```

**Criar usuário:**
```bash
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@example.com"}'
```

## ⚡ Performance Features

### Clustering
A aplicação utiliza clustering nativo do Node.js para aproveitar todos os cores do CPU:

```typescript
// server.ts
if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
}
```

### Cache Redis
Integração com Redis para cache de alta velocidade:

```typescript
// utils/redis.ts
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
```

### Logging Estruturado
Sistema de logs otimizado com Pino:

```typescript
// utils/logger.ts
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { colorize: true }
  }
});
```

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com hot reload
npm run build    # Compila TypeScript para JavaScript
npm start        # Executa versão compilada
npm test         # Executa testes (a configurar)
```

## 🌐 Deploy

### Vercel
A aplicação está configurada para deploy na Vercel:

```bash
# Instale a Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build e push para registry
docker build -t your-registry/high-performance-api .
docker push your-registry/high-performance-api
```

## 📊 Monitoramento

A aplicação inclui logging estruturado que facilita:

- **Métricas de performance**
- **Rastreamento de erros**
- **Monitoramento de requisições**
- **Análise de uso do Redis**

## 🔒 Segurança

- **Helmet**: Headers de segurança
- **CORS**: Controle de origem
- **Validação Zod**: Validação de entrada
- **Error Handling**: Tratamento seguro de erros

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para demonstrar boas práticas de desenvolvimento de APIs de alta performance.

---

**Performance é uma característica, não um acidente!** 🚀
