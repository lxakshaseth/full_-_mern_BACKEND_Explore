const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
    try {
        let token;

        // Check Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            const error = new Error("Not authorized. Token missing");
            error.statusCode = 401;
            throw error;
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Attach user information to request
        req.user = decoded;

        next();

    } catch (error) {
        error.statusCode = 401;
        error.message = "Not authorized. Invalid or expired token";
        next(error);
    }
};

module.exports = protect;