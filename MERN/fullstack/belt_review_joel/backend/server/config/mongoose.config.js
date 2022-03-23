const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/job_board", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("you're connected to the database"))
    .catch(err=>console.log("you're not connected to the database", err))