const jwt = require('jsonwebtoken');

const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey)
}

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "User not Authenticated",
        })
    }
    const token = authHeader.split(' ')[1];
    const paylaod = verifyToken(token, 'JWT_SECRET')

    req.user = paylaod;
    next();
}

module.exports = authenticate