//loop to get the squares to display data
//section => div =>
//loop to get each box from the api search
//form!!!!??
let lowerLevelBox = document.querySelector(".lowerLevel");
let userSearchBox = document.querySelector(".userSearch")

let url = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?i=";

userSearchBox.addEventListener("submit", function (event) {
  event.preventDefault();
  let query = event.target.querySelector("input[name='userInput']").value;
  query = encodeURIComponent(query);

fetch(url + query)
  .then(function(response) {
    response.json().then(function(data) {
      let recipes = data.results;
      console.log(recipes);
      // console.log("my data", data);


      // let foodResult = []


        for (var i = 0; i < recipes.length; i++) {

          let recipe = recipes[i];
          // function ingredientBox(recipe) {
          // let boxOfIngredients =

          // console.log("boxOfIngredients", boxOfIngredients);
          // return boxOfIngredients;

          // let findLowerLevelBox = ingredientBox(recipe);
          lowerLevelBox.innerHTML +=
                        `
                        <div class = "myBox">
                            <p>${recipe.title}</p>
                            <p>${recipe.href}</p>
                            <p>${recipe.thumbnail}</p>
                        </div>
                          `
          // recipe = 0;
          // console.log(lowerLevelBox);
        }
        recipe = 0;
        // query = 0;
        // userSearchBox = 0;
        // lowerLevelBox = 0;
        // console.log("boxOfIngredients2", boxOfIngredients);
      //   let findLowerLevelBox = ingredientBox(recipe);
      //   lowerLevelBox.innerHTML = findLowerLevelBox;
      //   console.log(findLowerLevelBox);
      // };
      // console.log("data", data);
      // console.log("foodResult", foodResult);

    });
  });
});

//search event for <input> type search event
//searchINput.addEventListener('search', function(event)){
//   console.log(event.target.value)
// })
