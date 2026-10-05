const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// API بسيط يمكن ربطه لاحقاً بالفورم
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running correctly!' });
});

app.post('/api/contact', (req, res) => {
    // هنا يمكن استلام بيانات العملاء
    console.log('Received contact request:', req.body);
    res.json({ success: true, message: 'Nous avons bien reçu votre message!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend is running on http://localhost:${PORT}`);
});
