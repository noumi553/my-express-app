const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const middleware = (req, res, next) => {
    // 🟢 Sabse zaroori fix: OPTIONS preflight request ko yahan bypass kar dein
    if (req.method === 'OPTIONS') {
        return next();
    }

    const clientApiKey = req.headers['x-api-key'];
    const myScereteApiKey = "n/6h;yutdaou//p34gnmi5pi0s53";
    
    if (clientApiKey != myScereteApiKey) {
        return res.status(401).json({ error: "Access Denied. API Key is missing." });
    }

    next();
}

app.get('/', middleware, (req, res) => {
    res.json({
        id: 1,
        name: 'Nouman aziz',
        fname: 'Aziz ur rehman',
        from: 'Karak',
        qulification: 'Bs Computer Sciense'
    })
})

module.exports = app;
