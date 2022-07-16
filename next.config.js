/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "upload.wikimedia.org", 
      "wallpaperaccess.com", 
      "links.papareact.com", 
      "a0.muscache.com",
      "i.ytimg.com",
      "pbs.twimg.com",
      "images8.alphacoders.com",
      "media-cdn.tripadvisor.com", 
      "www.trecobois.fr", 
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com"
    ],
  },
  env: {
    PORT: process.env.PORT,
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    MONGODB_URI: process.env.MONGODB_URI
  }
}
