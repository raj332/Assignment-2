const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const FileStore = require('session-file-store')(session)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({ path: './session-data' })
}))

app.get('/login', (req, res) => {
    console.log("entered");
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        req.session.loggedIn = true;
        req.session.username = username
        console.log(req.body)
        return res.redirect('/index')
    } else {
        return res.send('Please enter username and password !!!')
    }
})

app.get('/index', (req, res) => {
    if (req.session.loggedIn) {
        console.log('logged in')
        res.sendFile(__dirname + '/public/index.html')
    } else {
        console.log('not logged in')
        res.sendFile(__dirname + '/public/login.html')

    }
})

app.listen(3000, () => {
    console.log("Running on 3000");
})