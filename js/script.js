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
  {quote: `If you don't build your dream someone else will hire you to help build theirs.`,
  source: `Tony A. Gaskins, Jr.`,
  citation: 'The Dream Chaser',
  year: 2016,
  },
  {quote: `Happiness is my success.`,
  source: `Jahnel Madarang`,
  year: 2016,
  },
  {quote: `I'm not faking I'm sick. I'm pretending I'm well.`,
  source: `Katrina Cook`,
  citation: 'A Loving Spoonful Nutrition',
  year: 2020,
  },
  {quote: `It's so easy to laugh. It's so easy to hate. It takes strength to be gentle and kind.`,
  source: `Stephen Morrissey`,
  citation: `I Know It's Over. The Smiths.`,
  year: 1986,
  },
  {quote: `Never get so busy making a living that you forget to make a life. `,
  source: `Unknown.`,
  },
]

// console.log(quotes);


/***
 * `getRandomQuote` function
***/



function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length) + 1);
    return quotes[randomNumber][`quote`];
    console.log(quotes[randomNumber][`quote`])
  };

console.log(getRandomQuote());

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);