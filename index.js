const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const flash = require('connect-flash'); 
const customMware = require('./config/middleware')
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    name: 'Fluenteng',
    // TODO change the secret before deployment in production mode
    secret: 's%3AtZ7snx1PmIS0rX8NmS6aGUHkG70T7jd-.6QrkcX4xY67wGwZ6%2FOuvTw5yboWDo3L1XOkIEFz9TgA',
   resave: false,
    saveUninitialized: false,
    
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
}));
app.use(flash());
app.use(customMware.setFlash);
app.use('/', require('./routes')); 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
