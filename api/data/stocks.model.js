var mongoose = require("mongoose");

/* order of schemas is important, nested schemas DEFINED before main parent schema, so refs exist*/

var stockSchema = new mongoose.Schema({
   Symbol: String,
   Name: String,
   LastSale: Number,
   MarketCap: Number,
   AdrTso: String,
   IPOyear: Number,
   Sector: String,
   Industry: String,
   SummaryQuote: String
});

mongoose.model("Stock", stockSchema);
