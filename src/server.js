const app = require('./app')
const router = require('./router/index.js')

app.use(router)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is running'))