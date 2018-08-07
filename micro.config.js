const dispatch = require("micro-route/dispatch");
const { send, json } = require("micro");
const nuxt = require("./nuxt.index.js");

module.exports = dispatch()
    .dispatch("/api/mail", ["POST"], async (req, res) =>
        send(res, 200, { value: "mail", something: await json(req) })
    )
    .dispatch("/api/sender1", ["POST"], async (req, res, something) => {
      const body = await json(req)
      return send(res, 200, { value: "sender1", body })
    }
    )
    .dispatch("/api/sender2", ["GET"], async (req, res, { params, query }) =>
        send(res, 200, { value: "sender2", something: query })
    )
    .dispatch("*", ["GET"], (req, res) => nuxt.render(req, res));
