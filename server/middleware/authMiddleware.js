// Middleware to authenticate user (mock)
function authenticateUser(req, res, next) {
    // Assume authentication is successful, and user_id is added to req
    req.user = { id: 1 }; // Mock user
    next();
}

module.exports = { authenticateUser };
