const dispatch = require("micro-route/dispatch");
const { send, json } = require("micro");
const nuxt = require("./nuxt.index.js");
const sender1Handler = require('./api/sender1')

module.exports = dispatch()
    .dispatch("/api/mail", ["POST"], async (req, res) =>
        send(res, 200, { value: "mail", something: await json(req) })
    )
    .dispatch("/api/sender1", ["POST"], sender1Handler('sender1'))
    .dispatch("/api/sender2", ["POST"], sender1Handler('sender2'))
    .dispatch("*", ["GET"], (req, res) => nuxt.render(req, res));
