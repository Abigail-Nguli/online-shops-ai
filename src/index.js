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
  let prompt = `Suggest an online shopping platform for: ${searchInput.value}`;

  let siteName = ` <div class="site-name">title of an existing shopping platform</div>`;
  let platformServices = `The results should be in html format with ${siteName} and a brief explanation about the platform, its services or products (the explanation NOT exceed 5 lines and be separated by <br>)`;

  let siteLink = `<div class="site-link">Visit (title of the shopping platform)👉<a>NOW (link to the shopping platform)</a>👈</div>`;
  let shoppingPlatform = `${siteLink} and the last line: <div class="sign-off"> ❤️Happy Shopping❤️</div>`;

  let context = `Generate ONLY the best online shopping platform,
  ${platformServices}
  ${shoppingPlatform}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let shop = document.querySelector("#shop");
  shop.classList.remove("hidden");
  shop.innerHTML = `<div class="generating">⏳Looking for the best shopping platform with ${searchInput.value} for you🫵😍</div>`;

  axios
    .get(apiUrl)
    .then(displayshop)
    .catch((error) => {
      console.error("There was an error with the API request:", error);
      if (error.response) {
        console.error(
          "Server error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Network error or no response received:", error.request);
      } else {
        console.error("Axios error:", error.message);
      }
      shop.innerHTML = `<div class="error">❌ There was an error fetching the shopping platform. Please try again later.</div>`;
    });
}

let inputSearch = document.querySelector("#submit-btn");
inputSearch.addEventListener("click", getshop);
