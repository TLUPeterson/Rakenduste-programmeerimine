const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
var cors = require('cors');
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })