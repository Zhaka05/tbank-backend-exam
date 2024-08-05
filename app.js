const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JSONPlaceholder Cache API',
      version: '1.0.0',
      description: 'API для кэширование данных с JSONPlaceholder',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: `Локальный сервер, использующий порт ${PORT}`,
      },
    ],
  },
  apis: ['./routes/cacheRoutes.js'],
};

const specs = swaggerJsdoc(options);

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));



app.get('/', (req, res) => {
  res.send('<h1>Добро Пожаловать в мой API</h1><p>Use <a href="/docs">/docs</a> посмотреть документацию.</p>');
});

app.use('/api', cacheRoutes);


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});