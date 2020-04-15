// set array of quote objects
let quotes = [
  {
    "quote": "Innovation distinguishes between a leader and a follower.",
    "source": "Steve Jobs",
    "type": "inspirational, leadership"
  },
  {
    "quote": "The boisterous sea of liberty is never without a wave.",
    "source": "Thomas Jefferson"
  },
  {
    "quote": "We are no longer happy so soon as we wish to be happier.",
    "source": "Walter Savage Landor",
    "type": "happiness"
  },
  {
    "quote": "I am 100 percent in favor of the intelligent use of drugs, and 1,000 percent against the thoughtless use of them, whether caffeine or LSD. And drugs are not central to my life.",
    "source": "Timothy Leary",
    "citation": "Chaos & Cyber Culture",
    "year": "1994",
    "type": "culture"
  },
  {
    "quote": "My happiness is not the means to any end. It is the end. It is its own goal. It is its own purpose.",
    "source": "Ayn Rand",
    "citation": "Anthem",
    "type": "happiness"
  }
];

// set array of background colors
let colors = ['#2ecc71', '#8e44ad', '#e67e22', '#34495e', '#f1c40f'];

// gets random quote from quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// gets random color from colors array
function getRandomColor() {
  let randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

// sets page quote and background color to new random quote and color
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

  if (randomQuote.hasOwnProperty("type")) {
    htmlString += `<br></br><span class="type"> ${randomQuote.type} </span>`
  }

  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;
}

// gets and sets new quote and background color every 20 seconds
function getFreshQuoteTimer() {
  window.setInterval(printQuote, 20000)
}

getFreshQuoteTimer();

// gets and sets new quote and background color when button clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);