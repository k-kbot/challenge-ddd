import express from 'express'
import { PrismaClient } from '@prisma/client'
import { TeamQS } from 'src/infra/db/query-service/team-qs'

const app = express()
const port = 3000

app.get('/teams', async (req, res) => {
  const teamQS = new TeamQS(new PrismaClient())
  
  res.json(await teamQS.getAll())
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
