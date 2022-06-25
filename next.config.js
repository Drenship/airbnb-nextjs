/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "upload.wikimedia.org", 
      "wallpaperaccess.com", 
      "links.papareact.com", 
      "a0.muscache.com",
      "i.ytimg.com"
    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZHJlbnNoaXAiLCJhIjoiY2w0c3F0bzVoMHQ4czNlazI4d3NucThjMiJ9.fnstAFHDioX5cmHYFtqXcA'
  }
}
