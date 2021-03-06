/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/***
Dear Reviewer,

Just to let you know I am trying for an 'Exceeds Expectations' grade (but do not mind if I only pass with a Meets Expectations grade)
 - I've added this extra property to a few of the quote objects: 'alt_source' (i.e. if a quote is attributed to more than one person), plus added corresponding conditional statement
 - I've added a random background colour each time the button is pressed, using getRandomNum() and printColour() functions
 - I've used the setInterval() method to auto-refresh the quote (and colour) every 20secs
 ***/ 


/* 'autoRefresh' global variable below will hold the setInterval() method, 
enabling it to be reset by passing this variable to clearInterval(). 
This setting and resetting of the interval happens each time 
the show another quote button is clicked, 
to prevent the auto-refresh clashing with user initiated quote changes. 
The code is inside the printQuote() function.*/
let autoRefresh;

// An array of objects, each object containing quotes and other related properties
const quotes = [
  {
    quote: 'No pessimist ever discovered the secret of the stars or sailed an uncharted land, or opened a new doorway for the human spirit.',
    source: 'Helen Keller'
  },
  {
    quote: 'If I look at the mass, I will never act. If I look at the one, I will.',
    source: 'Mother Theresa'
  },
  {
    quote: 'Nobody made a greater mistake than she who did nothing because she could do only a little.',
    source: 'Edmund Burke'
  },
  {
    quote: 'Judge your value not by what you own, but by what you create.',
    source: 'Anon'
  },
  {
    quote: 'The very nature of adventure is uncertainty.',
    source: 'Anon'
  },
  { 
    quote: 'Everybody can be great because everybody can serve.',
    source: 'Martin Luther King'
  },
  { 
    quote: 'Success is going from failure to failure without loss of enthusiasm.',
    source: 'Winston Churchill',
    alt_source: 'Abraham Lincoln'
  },
  { 
    quote: 'Every person must decide whether he or she will walk in the light of creative altruism or in the darkness of destructive selfishness.',
    source: 'Martin Luther King'
  },
  { 
    quote: 'Only those who will risk going too far can possibly find out how far one can go.',
    source: 'T.S. Eliot'
  },
  { 
    quote: 'Our failures are due not to the defeats which we suffer but the conflicts we don\'t participate in.',
    source: 'Anon'
  },
  { 
    quote: 'If you talk about it, it\'s a dream; if you envision it, it\'s possible; if you schedule it, it\'s real.',
    source: 'Anthony Robbins'
  },
  { 
    quote: 'Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act.',
    source: 'Pablo Picasso'
  },
  { 
    quote: 'To know and not to do is not yet to know.',
    source: 'Buddhist proverb'
  },
  {
    quote: 'I act on the conviction that everyone is making a difference. Just by living our lives, consuming space and resources, we are making a difference. Our choice is what kind of difference to make.',
    source: 'Fran Peavey'
  },
  {
    quote: 'Once you design something it changes the future that is possible.',
    source: 'Bill Burnett & Dave Evans',
    citation: 'Designing your Life',
    year: '2016'
  },
  {
    quote: 'Making a vow to ourselves to do something rarely works. What works is making vivid plans, in which the when, where, and how of it are set out in concrete detail.',
    source: 'Carole Dweck',
    citation: 'Mindset',
    year: '2006'
  },
  {
    quote: 'Motivation follows action.',
    source: 'Anon'
  },
  {
    quote: 'Remembering you are going to die is the best way I know to avoid the trap of thinking that you have something to lose.',
    source: 'Steve Jobs'
  },
  {
    quote: 'If you fell down yesterday, stand up today.',
    source: 'H.G. Wells'
  },
  {
    quote: 'Courage doesn\'t always roar. Sometimes courage is the little voice at the end of the day that says I\'ll try again tomorrow.',
    source: 'Mary Anne Radmacher',
  },
  {
    quote: 'Success is not final. Failure is not fatal. It is the courage to continue that counts.',
    source: 'Winston Churchill'
  },
  {
    quote: 'Courage is resistance to fear, mastery of fear - not absence of fear.',
    source: 'Mark Twain',
    citation: 'Pudd\'nhead Wilson',
    year: '1894'
  },
  {
    quote: 'Do not wait to strike till the iron is hot, but make it hot by striking.',
    source: 'William B. Sprague'
  },
  {
    quote: 'Do you want to know who you are? Don\'t ask. Act! Action will delineate and define you.',
    source: 'Thomas Jefferson'
  },
  {
    quote: 'A journey of a thousand miles begins with a single step.',
    source: 'Lau Tzu',
    alt_source: 'Confucious'
  },
  {
    quote: 'The trouble with not having a goal is that you can spend your life running up and down the field and never score.',
    source: 'Bill Copeland'
  },
  {
    quote: 'Dripping water hollows out stone, not through force but through persistence.',
    source: 'Ovid (Roman Poet)',
    year: 'Circa 10 BCE'
  },
  {
    quote: 'The world will not be destroyed by those who do evil, but by those who watch them without doing anything.',
    source: 'Albert Einstein'
  }
];

// return a quote object from the quotes array at random
function getRandomQuote(array) {
  // random number from 0 to 1 less than array.length (i.e. up to last index position)
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomQuote = array[randomIndex];
  return randomQuote;
}
/* conditionally print the properties of a random object from the quotes array to the web page as a string of HTML. 
Also call the printColour() function, so that when a new quote is called, the background colour changes too */
function printQuote() {
  let quote = getRandomQuote(quotes);                 
  let quote_html = '';
  let outputDiv;
  // Incrementally build up the string of HTML
  quote_html += `<p class="quote">${quote.quote}</p>`; 
  quote_html += `<p class="source">${quote.source}`;
  if (quote.alt_source) {
    quote_html += ` (or ${quote.alt_source})`;
  }
  if (quote.citation) {
    quote_html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    quote_html += `<span class="year">${quote.year}</span>`;
  }
  quote_html += `</p>`;
  // print the string of html to the page               
  outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quote_html;
  // also reset the background colour with a random value
  printColour();

  /* auto-refresh the quote after 20secs. Then on subsequent calls of printQuote()
  clear and reset the auto-refresh inverval, 
  to avoid clashing with user-initiated requests for a new quote.  */  
  if (autoRefresh) {
    clearInterval(autoRefresh);
  }
  autoRefresh = setInterval(printQuote, 20000);
}

/* Generate and return random number value from 50 - 125
to use as RGB color values that fit within accessibility 
contrast considerations (relative to white text), 
plus aesthetic considerations. */
function getRandomNum() {
  return Math.round(Math.random() * 75) + 50;
}

/* Calling on the getRandomNum() function, generate a string containing an RGB value, 
and set the background colour of the body and button elements to this value */
function printColour() {
  let randomRGB = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
  let bodyElement = document.getElementById('body');
  let buttonElement = document.getElementById('loadQuote');
  
  bodyElement.style.backgroundColor = randomRGB;
  buttonElement.style.backgroundColor = 'inherit';

  /* Address issue with :hover background-color pseudo class styling
  no longer being applied to button after first button click */
  buttonElement.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'rgba(255,255,255,.25)';
  }, false);
  buttonElement.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = 'inherit';
  }, false);
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* Print a random quote from quotes array on first program load 
(so that user is not served same quote everytime they start the app.
Also print a random colour each time app is started. */
printQuote();


