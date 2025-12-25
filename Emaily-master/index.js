const express = require("express")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
require("./models/user")
require(("./services/passport"))
const mongoose = require("mongoose")

mongoose.connect(keys.mangoURI,{useNewUrlParser: true, useCreateIndex: true })

const app =express()

app.use(
    cookieSession({
        maxAge: 30 *24 *60 *60 *1000,
        //cookieSession allows us to set multiple cookie keys 
        //and selects one of it 
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 5000

app.listen(PORT)

