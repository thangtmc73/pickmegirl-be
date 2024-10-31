import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"
import { createSession } from "./sessionController"
import cors from "cors"

const whiteList = ["http://localhost:5173"]
const corsOptions = {
  origin: whiteList,
  methods: ["GET", "POST"],
}
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: corsOptions,
})

app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>")
})

app.post("/session/create", createSession)

io.on("connect", (socket) => {
  console.log("a user connected")
  socket.on("create-session", (payload) => {
    console.log("foo trigger", payload)
  })
})

io.on("disconnect", (socket) => {
  console.log("disconnect")
})

server.listen(8080, () => {
  console.log("server running at http://localhost:8080")
})
