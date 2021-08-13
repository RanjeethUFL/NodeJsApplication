const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());



app.get('/aadharid/:aadharid', (req,res) => {
    const aadharvalue = req.params.aadharid;
    if(aadharvalue.startsWith('5')){
       res.send('{ "firstName": "Rajesh", "lastName": "Kottu", "Address": "503, Santa Residency, Rajendra Nagar", "city": "Hyderabad", "district": "Hyderabad", "state": "Telanagana", "pincode": "500018" }');
    }else{
        res.send('{"key" : "Aadhar Not Found"}' );
    }
})

app.get('/CIBIL/:PAN', (req,res) => {
       /* we need to make a database callout to get the CIBIL Score, as we don't have DB now
       hard coding the value */
       res.send('{"CIBIL" : "800"}');
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));