const { sendError, createError, json, send } = require("micro");
const Joi = require("joi");

module.exports = async (req, res) => {
    // Check JWT token
    const auth = req.headers["authorization"];
    if (!auth || auth !== "Bearer CDc3wYMfZRUzczQQiyfK")
        return sendError(req, res, createError(401, "Unauthorised"));

    // Initialize payload schema
    const schema = Joi.object().keys({
        from: Joi.string()
            .email()
            .required(),
        to: Joi.array()
            .items(Joi.string().email())
            .required()
            .unique(),
        cc: Joi.array()
            .items(Joi.string().email())
            .optional()
            .unique(),
        bcc: Joi.array()
            .items(Joi.string().email())
            .optional()
            .unique(),
        subject: Joi.string().required(),
        text: Joi.string().required()
    });
    // Validate schema
    try {
        const payload = await json(req);
        const result = await Joi.validate(payload, schema);
        Joi.assert(
            [...result.to, ...(result.cc || []), ...(result.bcc || [])],
            Joi.array().unique(),
            "Duplicate emails present in to, cc or bcc."
        );
        console.log("Email sent", result);
        return send(res, 200, "Email successfully sent");
    } catch (error) {
        if (error.name === "ValidationError") {
            return sendError(
                req,
                res,
                createError(400, `Invalid payload: ${error.message}`)
            );
        }
        return sendError(req, res, createError(500, "Internal Error"));
    }
};
