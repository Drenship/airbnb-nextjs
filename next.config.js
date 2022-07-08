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
    PORT: 8080,
    mapbox_key: 'pk.eyJ1IjoiZHJlbnNoaXAiLCJhIjoiY2w0c3F0bzVoMHQ4czNlazI4d3NucThjMiJ9.fnstAFHDioX5cmHYFtqXcA'
  }
}
