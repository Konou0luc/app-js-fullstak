function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500).json({
        message: err.message || "Erreur interne du serveur",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
}

module.exports = errorHandler;