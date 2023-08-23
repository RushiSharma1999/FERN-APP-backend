var admin = require("firebase-admin");
var serviceAccount = require("./fern-stack-ee1f2-firebase-adminsdk-2pj3r-870af83c64.json")


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fern-stack-ee1f2-default-rtdb.firebaseio.com"
  });
  

const express = require('express');
const app = express();
app.get('/', function(req, res){
    return res.json({
        message: 'Hello World',
        success: true
    });
});

app.post('/', function(req, res){
    return res.json({
        message: 'Welcome',
        success: true
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000')}
    );