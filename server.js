const express = require('express');

const app = express();

const path = require('path');
const PORT = process.env.PORT || 4280;
const HOST = process.env.HOST || 'localhost';
const name = 'my-app';
app.use('/', express.static(path.join(__dirname,name)));

app.get('', (req,res)=>{
    res.sendFile(path.join(__dirname,name,'index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`);
});