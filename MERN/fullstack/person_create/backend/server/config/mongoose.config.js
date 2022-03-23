const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopledv',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Database connection established'))
    .catch(err=>console.log('There was an error', err))