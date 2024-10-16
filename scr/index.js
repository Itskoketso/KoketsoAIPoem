function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let apiKey = "82f2ff36563otbde1564b5ee447a074a";
  let context = "";
  let prompt =
    "You are a Poem expert. Generate a short, sweet poem. Print each sentence on new line. Sign poem with the SheCodes AI";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
