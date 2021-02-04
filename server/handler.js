// Ping
function ping(req, res) {
    const content = {
        "status": 200,
        "uptime" : process.uptime()
    };
    res.json(content);
    return res;
};

// Export
module.exports = {
    "ping": ping
};