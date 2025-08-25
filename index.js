let res = document.getElementById("result");

const fetchData = async () => {
  let movieName = document.getElementById("inp-word").value;
  let api = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=398413c2`
  );
  let data = await api.json();
  console.log(data);
  if (data.Response == "True") {
    res.innerHTML = `<div class="info">
        <img src=${data.Poster} class="poster" alt="poster">
        <div>
         <h2>${data.Title}</h2>
      <div class="rating">

      <h4><i class="fa-solid fa-star" style="color: #FFD43B;"></i></h4>
       
        <h4>${data.imdbRating}</h4>
      </div>

      <div class="details">
        <span>${data.Rated}</span>
        <span>${data.Year}</span>
        <span>${data.Runtime}</span>

      </div>

      <div class="genre">
        <p>${data.Genre}</p>
      </div>
      </div>
      </div>

      <h4>Plot :</h4>
      <p>${data.Plot}</p>

      <h4>Cast :</h4>
      <p>${data.Actors}</p>

     

    
  `;
  } else if (movieName == "") {
    res.innerHTML = `<h3 class="msg">Please Enter the Movie Name..</h3>`;
  } else {
    res.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
  }
};
