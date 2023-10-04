import express from 'express'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(Routes)

app.listen('1234', () => console.log('Service-A running on port 1234'))