'use strict'

// Variables
const tweetsList = document.getElementById('tweets-list')


// Event Listenners
eventListeners()

function eventListeners() {
  // When you send the form
  document.querySelector('#form').addEventListener('submit', addTweet)
}



// Functions

function addTweet(e) {
  e.preventDefault()
  
  // Read value textarea
  const tweet = document.getElementById('tweet').value

  // Create delete button
  const deleteButton = document.createElement('a')
  deleteButton.classList = 'delete-tweet'
  deleteButton.innerText = 'X'

  // Create element and add to list
  const li = document.createElement('li')
  li.innerText = tweet

  // Add delete button tweet
  li.appendChild(deleteButton)
  tweetsList.appendChild(li)
}