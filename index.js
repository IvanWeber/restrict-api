const express = require('express')
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 8080

const app = express()

// app.get('/', (req, res) => {
//     res.send('HELLO POSTGRES + NODEJS!')
// })

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server has been started on port ${PORT} (http://localhost:${PORT})`))