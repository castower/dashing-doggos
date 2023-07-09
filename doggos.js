

const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function friendFinder () {
const promise = fetch(BREEDS_URL);

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    console.log(processedResponse);
    let imgURL = processedResponse.message;
    console.log(imgURL);
    let image = document.querySelector(".dogCEO");
    image.src = `${imgURL}`;
    image.addEventListener("load", () => {
        console.log("The image has loaded!");
    });
    let image2txt = document.querySelector(".image2");
    text = imgURL.split('/');
    text = text[4];
    text = text.replace('-', ' ');
    console.log(text);
    textSplit = text.split(' ');
    console.log(textSplit);
    if (textSplit.length > 1){
     text = textSplit[1] + ' ' + textSplit[0];
    } else {
        text = textSplit[0];
    }
    image2txt.innerHTML = `Bruno, The ${text}`;
    image.alt = `Picture of dog, ${text}`;
    image2txt.addEventListener("load", () => {
        console.log("The text has loaded!");
    });
  });

}

document.querySelector('.friendFinder').addEventListener("click", friendFinder)

function brunoHouse () {
  let image = document.querySelector(".dogCEO");
    image.src = "./images/bruno-house.jpg";
    image.alt = "Bruno's Dog House";
    image.addEventListener("load", () => {
        console.log("The image has loaded!");
    });
    let image2txt = document.querySelector(".image2");
    image2txt.innerHTML = `Bruno's Dog House`;
    image2txt.addEventListener("load", () => {
      console.log("The text has loaded!");
  });
}

document.querySelector('.brunoHouse').addEventListener("click", brunoHouse)

console.log("this will log first");


anime({
    targets: '.h1text',
    //rotate:360,
    translateY: [50, 0],
    easing: 'easeOutBounce',
    loop: 2
  });

