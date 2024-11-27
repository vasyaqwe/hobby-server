import { Hono } from "hono"
import { invoiceRoute } from "./invoice/route"

const app = new Hono()

app.get("/hello", (c) => {
   return c.json({
      message: "Hello from Hono!",
   })
})

app.route("/invoice", invoiceRoute)

export default app
