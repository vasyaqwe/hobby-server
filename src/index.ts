import { Hono } from "hono"
import { invoiceRoute } from "./invoice/route"
import { handle } from 'hono/vercel'

const app = new Hono()

app.get("/", (c) => {
   return c.text("Hello Hono!")
})

app.route("/invoice", invoiceRoute)

export default handle(app)