import express from 'express'
import router from './routes'

export const myIp = '172.31.25.129'

const app = express()

app.use(router)

app.use(express.json())
