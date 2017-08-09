//loop to get the squares to display data
//section => div =>
//loop to get each box from the api search
//form!!!!??

let url = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?i=pizza";



fetch(url)
  .then(function(response) {
    response.json().then(function(data) {
      console.log("my data", data);
      let lowerLevelBox = document.querySelector(".lowerLevel");


      let foodResult = []

      function ingredientBox() {
        for (var i = 0; i < data.results.length; i++) {
          foodResult.push(data.results[i].title);
          foodResult.push(data.results[i].href);
          foodResult.push(data.results[i].thumbnail);
        }
        const boxOfIngredients = `
                        <div class = "myBox">
                            <p>${"foodResult"}</p>
                        </div>
                      `
              console.log("boxOfIngredients", boxOfIngredients);
      };
      console.log("data", data);
      console.log("foodResult", foodResult);
      let findlowerLevelBox = ingredientBox(data);
      lowerLevelBox.innerHTML = findlowerLevelBox;
    });
  });


//search event for <input> type search event
//searchINput.addEventListener('search', function(event)){
//   console.log(event.target.value)
// })
