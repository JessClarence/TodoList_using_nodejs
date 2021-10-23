const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine' , 'ejs');


let addItem = [];
app.get('/' ,(req, res)=>{
    const date = new Date();

    const options = { 
        weekday: "long",
        month: "long",
        day: "numeric"
    
    };
    let day = date.toLocaleDateString("en-US", options);
    
    res.render("index", {kindOfDay: day, newItems:addItem });

});

app.post('/' , (req, res)=>{
    item = req.body.items;

    addItem.push(item);
    res.redirect('/');
});


app.listen(port, ()=>{
    console.log("...port is working flawlessly");
});