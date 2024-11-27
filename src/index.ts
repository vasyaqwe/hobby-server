import { Hono } from "hono"
import { handle } from "hono/vercel"
import { invoiceRoute } from "./invoice/route"

const app = new Hono().basePath("/api")

app.get("/", (c) => {
   return c.text("Hello Hono!")
})

app.route("/invoice", invoiceRoute)

export default handle(app)
