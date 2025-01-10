const express = require("express");
const cors = require("cors");

const app = express();
const options = {orgin:"*"}
app.use(cors(options));
app.use(express.json());

const data = ["hello",123,{"key":"value"}];
app.get('/',(req,res) => {
    res.send(data)
})
    let studentdata =[
        {
        name: "karthick",
        age: 22,
        rollnumber: 233098
     },
    ];
app.post('/',(req,res)=>{
    studentdata.push(req.body);
    console.log(req.body);
    res.send("Done")
})
app.listen(3333,()=>{
    console.log("started")
})
