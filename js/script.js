/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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
    quote: 'Imagination is more important than knowledge. For knowledge is limited to all we know and understand, while imagination embraces the entire world, and all there ever will be to know and understand.',
    source: 'Albert Einstein'
  },
  { 
    quote: 'Success is going from failure to failure without loss of enthusiasm.',
    source: 'Winston Churchill'
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
    quote: 'Well, while I\'m here, I\'ll do the work. And what\'s the work? To ease the pain of living. Everything else, drunken dumbshow.',
    source: 'Allen Ginsberg'
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
    quote: 'Motivation follows action',
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
    source: 'Mark Twain'
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
    source: 'Lau Tzu'
  },
  {
    quote: 'The trouble with not having a goal is that you can spend your life running up and down the field and never score.',
    source: 'Bill Copeland'
  },
  {
    quote: 'Dripping water hollows out stone, not through force but through persistence.',
    source: 'Ovid'
  },
  {
    quote: 'The world will not be destroyed by those who do evil, but by those who watch them without doing anything',
    source: 'Albert Einstein'
  }
];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.