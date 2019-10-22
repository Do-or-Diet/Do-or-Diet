var unirest = require("unirest");
var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");
req.headers({
	"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
	"x-rapidapi-key": "0b9ea9a929msh8186ab5301dcb1ap12d296jsn5c9724b588b5"
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});