document.querySelector("#submitButton").addEventListener("click",function(e){
  
  const numberOfJokes = document.getElementById("number_joke").value;

  const joke = new XMLHttpRequest();

  joke.open('GET',`http://api.icndb.com/jokes/random/${numberOfJokes}`,true);

  joke.onload = function(){
    if (this.status === 200){
      let jokeId = 1; 
      const jokeResponse = (JSON.parse(this.responseText)).value;
      jokeResponse.forEach(element => {
        
        console.log(element);
        ajaxUI = document.createElement("div");
        ajaxUI.id = "joke"
        ajaxUI.className = "mt-2"
        ajaxUI.innerHTML = `<hr>
        <p>${jokeId++}. ${element.joke}</p>`
        document.querySelector(".card").appendChild(ajaxUI);
      });
      
    }
  }

  joke.send();

  e.preventDefault();
});
