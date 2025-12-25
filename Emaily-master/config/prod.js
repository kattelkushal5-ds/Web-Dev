// prod.js production keys

module.exports={
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mangoURI:  process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    facebookCllientID:  process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET
}
