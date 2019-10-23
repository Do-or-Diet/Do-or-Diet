var userDiet="";

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    console.log(data);
    $(".member-name").text(data.email);
    $("#diet").text(data.diet);
    userDiet=data.diet;
  });
  function getRecipe(diet, protein) {
    var queryURL = "https://api.edamam.com/search?q="+protein+"&app_id=edamam-recipe-search.p.rapidapi.com&app_key=5608155f22msh0134e91f7377536p10082bjsn69ced82abbca&health="+diet;
    $.ajax({
      url: queryURL,
      method: "GET",
      datatype: "jsonp"
    }).then(function (response) {
      console.log(response);
      console.log(response.hits[0].recipe.label);


      //card recipe 1
      $(".card-title1").text(response.hits[0].recipe.label)
      $(".btn1").attr("href", response.hits[0].recipe.url )
      $(".card-text1").empty()
      var ingredientsList1 = $("<ul>")
      for (let i = 0; i < response.hits[0].recipe.ingredientLines.length; i++) {  
        ingredientsList1.append(`<li>${response.hits[0].recipe.ingredientLines[i]}</li>`)
      }
      
      $(".card-text1").append(ingredientsList1)
      
      //card recipe 2
      $(".card-title2").text(response.hits[1].recipe.label)
      $(".btn2").attr("href", response.hits[1].recipe.url)
      $(".card-text2").empty()
      var ingredientsList2 = $("<ul>")
      for (let i = 0; i < response.hits[1].recipe.ingredientLines.length; i++) {  
        ingredientsList2.append(`<li>${response.hits[1].recipe.ingredientLines[i]}</li>`)
      }
      
      $(".card-text2").append(ingredientsList2)
    })
  }
console.log(userDiet);


$(document).on("click", "#proteinSUBMIT",function(event){
  event.preventDefault();
  console.log("we hit dis")
  var protein = $("#proteinINPUT").val().trim()
  console.log(protein)
  getRecipe(userDiet, protein)
})
// $.post('/api/user_data').on("click","#proteinSUBMIT", function(event){
//   event.preventDefault();
//   var protein = $("#proteinINPUT").val().trim()
//   console.log(protein)
//   getRecipe(userDiet, protein) 
// });
      //  { myData: 'This is my data.' }, // data to be submit
      //  function(data, status, xhr) {   // success callback function
      //           alert('status: ' + status + ', data: ' + data.responseData);
      //       },
      //  'json'); // response data format
      // Attach a submit handler to the form
// $( "#protienSUBMIT" ).submit(function( event ) {
 
//   // Stop form from submitting normally
//   event.preventDefault();
 
//   // Get some values from elements on the page:
//   var $form = $( this ),
//     term = $form.find( "input[name='s']" ).val(),
//     url = $form.attr( "action" );
 
//   // Send the data using post
//   var posting = $.post( url, { s: term } );
 
//   // Put the results in a div
//   posting.done(function( data ) {
//     var content = $( data ).find( "#content" );
//     $( "#result" ).empty().append( content );
//   });
// });
});
