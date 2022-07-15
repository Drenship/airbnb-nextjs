const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    
    mongoose.connect(process.env.MONGO_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err))
    
    
    server.use((req, res, next) => {
        if(!['localhost:3000', '127.0.0.1:3000', '192.168.1.16:3000'].includes(req.headers.host)) {
            res.status(401).send({
                error_name: 'ACCESS_DENIED',
                error_type: '401',
                error_message: 'Access not authorized !'
            });
        }
        return next();
    })
    
    server.use('/api', require('./routes/router'));  

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> # *****************************************`);
      console.log(`> #                                         *`);
      console.log(`> # Server started at http://localhost:${PORT} *`);
      console.log(`> #                                         *`);
      console.log(`> # *****************************************`);
    });

}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});