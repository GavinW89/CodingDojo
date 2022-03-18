const express = require("express")
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req, res) =>{
    console.log("trying to talk to db");
    res.json({message: "take this response!!!"});
})

app.get("/other", (req, res) =>{
    console.log("getting this other route thing");
    res.json(["here is item 0", "you can put what ever you want in here",]);
})

app.get("/repeat/:word", (req, res) =>{
    console.log("Let's repeat that word for you.");

    res.json([`Here is your repeated word, sir: ${req.params.word}`]);
})

app.post("/api/repeat", (req,res) =>{
    console.log("taking in post request");
    res.json(req.body);
})



app.listen(port, ()=>console.log(`Running on port ${port}`));
