var sql = require('mssql');
const poolConnection = require('../config/poolConnectionDB');

exports.addProduct = async (req) => {
    try {
        const pool = await poolConnection.getPoolConnection();
        const result = await pool.request()
            .input('productId', sql.Int, req.productId)
            .input('productName', sql.VarChar(25), req.productName)
            .input('price', sql.Money, req.price)
            .input('productDescription', sql.VarChar(1000), req.productDescription)
            .output('success', sql.Bit, 0)
            .execute('addProduct');
        return result;
    } catch (err) {
        throw err;
    }
}
exports.getProducts = async (req) => {
    try {

        const pool = await poolConnection.getPoolConnection();
        const result = await pool.request()
            .input('productName', sql.VarChar(25), !req.productName ? null : req.productName)
            .execute('getProducts');
        return result;
    } catch (err) {
        throw err;
    }
}

exports.updateProduct = async (req) => {
    try {
        const pool = await poolConnection.getPoolConnection();
        const result = await pool.request()
            .input('productId', sql.Int, req.productId)
            .input('productName', sql.VarChar(25), !req.productName ? null : req.productName)
            .input('price', sql.Money, !req.price ? null : req.price)
            .input('productDescription', sql.VarChar(1000), !req.productDescription ? null : req.productDescription)
            .output('success', sql.Bit, 0)
            .execute('updateProduct');
        return result;
    } catch (err) {
        throw err;
    }
}

exports.deleteProduct = async (req) => {
    try {
        const pool = await poolConnection.getPoolConnection();
        const result = await pool.request()
            .input('productId', sql.Int, req.productId)
            .output('success', sql.Bit, 0)
            .execute('deleteProduct');
        return result;
    } catch (err) {
        throw err;
    }
}
