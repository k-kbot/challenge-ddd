import express from 'express'

export const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
