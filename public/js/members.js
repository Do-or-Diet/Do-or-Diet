

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    console.log(data);
    $(".member-name").text(data.email);
    $("#diet").text(data.diet);
    getRecipe(data.diet);
  });
  function getRecipe(diet) {
    var queryURL = "https://api.edamam.com/search?q=tofu&app_id=edamam-recipe-search.p.rapidapi.com&app_key=5608155f22msh0134e91f7377536p10082bjsn69ced82abbca&health=" + diet;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })
  }

});
