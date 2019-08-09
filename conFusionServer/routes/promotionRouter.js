// importing core/third-party node modules
const express = require('express');
const bodyParser = require('body-parser');

// creating router
const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

// Router configuration
promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: '+ req.body.name + ' with details: '+req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all the promotions!');
});


promotionRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Will get the promo with id " +req.params.promoId+ " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported on /promotions/"+req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end("Will delete promo with id "+req.params.promoId);
});

module.exports = promotionRouter;

