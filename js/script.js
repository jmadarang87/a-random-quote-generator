/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*
array of objects that contain the following properties: 
  quote - string - the actual quote
  source - string - the person or characer who said it 
  citation - string - reference to the source of the quote such as a book or movie
  year - string or number - the year the quote originated
  tags - array - type of quote
*/
let quotes = [
  {quote: `If you don't build your dream someone else will hire you to help build theirs.`,
  source: `Tony A. Gaskins, Jr.`,
  citation: 'The Dream Chaser',
  year: 2016
  },
  {quote: `Happiness is my success.`,
  source: `Jahnel Madarang`,
  year: 2016,
  tags: [`Adventure`, 'Positivity']
  },
  {quote: `I'm not faking I'm sick. I'm pretending I'm well.`,
  source: `Katrina Cook`,
  citation: 'A Loving Spoonful Nutrition',
  year: 2020
  },
  {quote: `It's so easy to laugh. It's so easy to hate. It takes strength to be gentle and kind.`,
  source: `Stephen Morrissey`,
  citation: `I Know It's Over. The Smiths.`,
  year: 1986
  },
  {quote: `Never get so busy making a living that you forget to make a life.`,
  source: `Unknown.`,
  },
]

/*
getRandomQuote function creates a random number and 
uses that random number to 
return a random quote object from the quotes array.
*/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
    return quotes[randomNumber];
  }

/*
printQuote function calls getRandomQuote(), 
uses the returned quote object to build a string of HTML and quote properties 
then uses that string to display random quote in the browser
*/
function printQuote(){
  // creates variable to store random quote object from getRandomQuote()
  let quoteObject = getRandomQuote();
  // creates variable to store HTML string
  let html = `
    <p class ="quote"> ${quoteObject['quote']}</p>
    <p class ="source"> ${quoteObject['source']}`;
  // if statements to concatenate <span> element to html if quote object contains citation, year and/or tags
  if (quoteObject['citation']) {
      html += `<span class="citation"> ${quoteObject['citation']}</span>`;
  } if (quoteObject['year']) {
      html += `<span class ="year"> ${quoteObject['year']}</span>`;
  } if (quoteObject['tags']) {
      html += `<span class="tags"><br> Tags: ${quoteObject['tags'].join(", ")} </span>`
  }
  html += '</p>';
  // returns full html string in quote-box id
  document.getElementById('quote-box').innerHTML = html;

  // creates a random RGB color and changes background to that color
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let randomRGB = `rgb(${red}, ${blue}, ${green})`;
  document.body.style.backgroundColor = randomRGB;
  }

// automatically calls printQuote() every 4 seconds
setInterval(printQuote, 4000);

// click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);