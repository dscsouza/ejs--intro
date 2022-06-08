const PORT = 3000;
const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();


let users=[{
    id: 2,
    name: "Deyvison",
    phone: "(92) 99149-9999",
},
{
    id:3,
    name: "Ana",
    phone: "(92) 99149-9999",
},
{
    id: 4,
    name: "Allenhyse",
    phone: "(92) 99149-9999",
},
{
    id: 5,
    name: "Songila",
    phone: "(92) 99149-9999",
}
];

app.set("views", path.join(__dirname, 'views') )
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render('user', {users})
    
    
})

app.get("/about", (req, res)=>{
    res.render('about')
    
    
})

app.listen(PORT, ()=>{
    console.log("Server running on PORT 3000 ", PORT);
})