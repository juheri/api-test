"use strict";

const validate = require("../helpers/validation");

exports.auth = async (req, res) => {
    try {
        const result = await validate.validateRequest(req.body);
        result
            ? res.status(200).json({
                success: true,
                message: "success",
                data: {
                    token: result
                }
            })
        : res.status(400).json({ error: true, message: "data invalid" });
    } catch (e) {
        res.status(400).json({
            error: true,
            message: "data invalid"
        });
    }
};

exports.fetch = async (req, res) => {
    try {
        const token = req.headers.token;
        const result = await validate.fetch(token);
        result != false ? res.status(200).json({
            success: true,
            message: "fetch data success",
            data: result
        }) : res.status(400).json({
            error: true,
            message: "something went wrong"
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: true,
            message: "something went wrong"
        });
    }

}