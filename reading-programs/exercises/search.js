// #todo

'use strict';

/* -- gather and confirm user input -- */

let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    continue;
  }

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
}

/* -- configure the search: case-sensitive or case-insensitive -- */

let caseSensitive = confirm('do you want a case-sensitive search?');

/* -- gather and confirm the search query -- */

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );
  if (query === null) {
    continue;
  }

  userConfirmedQuery = confirm('is this correct: "' + query + '"');
}

/* -- decide which search logic -- */

let phraseIncludesQuery = false;
if (caseSensitive) {
  /* -- perform a case-sensitive search -- */

  phraseIncludesQuery = phrase.includes(query);
} else {
  /* -- perform a case-insensitive search -- */

  let lowerCasePhrase = phrase.toLowerCase();
  let lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

/* -- generate and communicate search result -- */

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
} else {
  doesOrNot = 'does not';
}

alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive,
);
