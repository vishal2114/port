const express = require('express');
const app = express();
const port = 8000;



const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes')); 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
