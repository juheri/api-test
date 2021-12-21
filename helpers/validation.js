"use strict";
const jwt = require('jsonwebtoken');
const Axios = require('axios');

exports.validateRequest = async (data) => {
    try {
        const { id, nik, role } = data;
        if (
            !id ||
            !nik ||
            nik.toString().length < 6 ||
            !role ||
            role != "admin"
        ) return false;
        const token = await jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "1h" });
        return token;
    } catch (e) {
        return false;
    }
}

exports.fetch = async (data) => {
    try {
        const result = await jwt.verify(data, process.env.SECRET_KEY);
        if (result.role != "admin") return false;
        const convert = await Axios({
            method: "get",
            url: "https://free.currconv.com/api/v7/convert?q=USD_IDR&compact=ultra&apiKey=0a671a7aa1bad695b1b7",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result_fetch = await Axios({
            method: "GET",
            url: "https://60c18de74f7e880017dbfd51.mockapi.io/api/v1/jabar-digital-services/product",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const datas = result_fetch.data.map(fetch => {
            return {
                id: fetch.id,
                createdAt: fetch.createdAt,
                price: fetch.price,
                IDR: Math.round(fetch.price * convert.data.USD_IDR),
                department: fetch.department,
                product: fetch.product
            }
        });
        return datas
    } catch (e) {
        return false;
    }
}