/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    "quote": "Innovation distinguishes between a leader and a follower.",
    "source": "Steve Jobs"
  },
  {
    "quote": "The boisterous sea of liberty is never without a wave.",
    "source": "Thomas Jefferson"
  },
  {
    "quote": "We are no longer happy so soon as we wish to be happier.",
    "source": "Walter Savage Landor"
  },
  {
    "quote": "I am 100 percent in favor of the intelligent use of drugs, and 1,000 percent against the thoughtless use of them, whether caffeine or LSD. And drugs are not central to my life.",
    "source": "Timothy Leary",
    "citation": "Chaos & Cyber Culture",
    "year": "1994"
  },
  {
    "quote": "My happiness is not the means to any end. It is the end. It is its own goal. It is its own purpose.",
    "source": "Ayn Rand",
    "citation": "Anthem"
  }
];
let colors = ['#2ecc71', '#8e44ad', '#e67e22', '#34495e', '#f1c40f'];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
}

function getRandomColor() {
  let randomNumber = Math.floor(Math.random() * 5);
  return colors[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;

  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;

  if (randomQuote.hasOwnProperty("citation")) {
    htmlString += `<span class="citation"> ${randomQuote.citation} </span>`
  }

  if (randomQuote.hasOwnProperty("year")) {
    htmlString += `<span class="year"> ${randomQuote.year} </span>`
  }

  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);