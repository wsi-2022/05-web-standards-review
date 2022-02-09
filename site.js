'use strict';

var ghForm = document.querySelector('#github-form');
var ghUsername = ghForm.querySelector('#username');
var ghSubmit = ghForm.querySelector('#submit');

ghUsername.addEventListener('input', function(event) {
  if (this.value !== '') {
    ghSubmit.removeAttribute('disabled');
    ghSubmit.setAttribute('aria-disabled', 'false');
  } else {
    ghSubmit.setAttribute('disabled', 'disabled');
    ghSubmit.setAttribute('aria-disabled', 'true');
  }
});

ghForm.addEventListener('submit', function(event) {
  var formData = new FormData(this);
  var username = formData.get('username');
  var apiURL = 'https://api.github.com/users/' + username;
  event.preventDefault();
  console.log('Heard form submit event!');
  console.log('The username, via FormData, is:', username);

  fetch(apiURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.login);
    });

});
