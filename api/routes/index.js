var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');

router
	.route('/stocks')
	.get(ctrlStocks.stocksGetAll); // mapped a controller to the route

router
	.route('/stocks/:stockId')
	.get(ctrlStocks.stocksGetOne);
	
	 router
  .route('/stocks/symbol/:symbol')
  .get(ctrlStocks.stocksSearchOne);
	
	module.exports = router;