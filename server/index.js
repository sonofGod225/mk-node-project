import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import flash from 'express-flash';
const app = express();
app.set('port', (process.env.PORT || 3000));
const ENV = process.env.NODE_ENV || 'development';
if (ENV === 'production') {
    app.use(gzip());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, '../..', 'public')));

console.log('--------------------------');
console.log('===> 😊  Starting Server . . .');
console.log(`===>  Listening on port: ${app.get('port')}`);
if (ENV === 'production') {
    console.log('===> 🚦  Note: In order for authentication to work in production');
    console.log('===>           you will need a secure HTTPS connection');
    sess.cookie.secure = true; // Serve secure cookies
}
console.log('--------------------------');
app.use(flash());
app.get('/',function(req,res){
    return res.send('Welcom Mk-react');
})
app.get('*', function () {
    console.log("Welcom Mk-react");
    return "Welcom Mk-react"
});
app.listen(app.get('port'));