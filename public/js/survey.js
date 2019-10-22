var query = "q=health";
var queryURL = "https://api.edamam.com/search?" + query + "&app_id=edamam-recipe-search.p.rapidapi.com&app_key=5608155f22msh0134e91f7377536p10082bjsn69ced82abbca";
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {
     console.log(response.hits[2])

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
   });

   //navigate to the name of the response
//    console.log("name: " + response.hits[0].label)

//you might need to do a for loop
// console.log("diet/health label: " + response.hits[0].healthLabels)
   
// most of the information for the recipe is here, might need a for loop that then goes in the objects and tells you each ingredient and how to use it
// console.log("ingredients: " + response.hits[0].ingredients)