const path = require('path');
const express = require('express');

const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to home
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Routes cho Black Box Tools
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Route cho Black Box - serve trực tiếp black-box.html
app.get('/black_box', (req, res) => {
    // Kiểm tra có mã function không (validation sẽ làm ở client-side)
    const functionCode = req.query.code;
    if (functionCode) {
        res.sendFile(path.join(__dirname, 'views', 'black-box.html'));
    } else {
        res.redirect('/home');
    }
});

// Route cho Answer Page - yêu cầu mật khẩu
app.get('/answer', (req, res) => {
    const password = req.query.password;
    const correctPassword = 'protech2025'; // Mật khẩu mặc định
    
    if (password === correctPassword) {
        res.sendFile(path.join(__dirname, 'views', 'answer.html'));
    } else {
        res.sendFile(path.join(__dirname, 'views', 'password.html'));
    }
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
