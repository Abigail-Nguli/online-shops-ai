function displayshop(response) {
  new Typewriter("#shop", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function getshop(event) {
  event.preventDefault();

  let apiKey = "fa483db98dc0o4b7fc5fdbea841a31ta";
  let searchInput = document.querySelector("#search-input");
  let prompt = `Provide the best online shopping platform for: ${searchInput.value}`;
  let context = `Generate ONLY ONE online shopping platform that you think is the best. The results should be displayed in html format and include a <div class="site-name">title of an existing shopping platform</div>, 
  then a brief explanation about the platform and its services and products.
  it should also include a link to the shopping platform with the following text: <div class="site-link">👉<a>Visit [title of the shopping platform] NOW(this should be active link to the shopping platform)</a>👈</div>. The explanation should be divided into separate lines by <br>. The last line should be: <div class="sign-off"> ❤️Happy Shopping❤️</div>`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let shop = document.querySelector("#shop");
  shop.classList.remove("hidden");
  shop.innerHTML = `<div class="generating">⏳Looking for the best shopping platform with ${searchInput.value} for you🫵😍</div>`;

  axios.get(apiUrl).then(displayshop);
}

let inputSearch = document.querySelector("#submit-btn");
inputSearch.addEventListener("click", getshop);
