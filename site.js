'use strict';

var ghForm = document.querySelector('#github-form');

ghForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Heard form submit event!');
});
