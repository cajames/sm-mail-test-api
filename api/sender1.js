const { sendError, createError, json, send } = require("micro");
const Joi = require("joi");

module.exports = async (req, res, something) => {

    // Check JWT token
    const auth = req.headers['authorization']
    if (!auth || auth !== 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        return sendError(req, res, creteError(401, 'Unauthorised'))

    // Initialize payload schema
    const schema = Joi.object().keys({
        to: Joi.array.items(Joi.string().email())
    })

    // Validate schema
    // Return 200 if all good

  return send(res, 200, "Nice");
};
