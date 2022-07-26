const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/jokes_DB',{
    useNewUrlParser: true,
    // useUnifiedTopolgy:true
})

.then(()=> console.log('established a connection to the database'))
.catch(err => console.log('Something went wrong connectin to the DB', err));