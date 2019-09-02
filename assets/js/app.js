'use strict'

// Variables
const tweetsList = document.getElementById('tweets-list')


// Event Listenners
eventListeners()

function eventListeners() {
  // When you send the form
  document.querySelector('#form').addEventListener('submit', addTweet)

  // Delete tweets
  tweetsList.addEventListener('click', deleteTweet)

  // Loaded content
  document.addEventListener('DOMContentLoaded', localStorageReady)
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

  // Add to local storage
  addTweetLocalStorage(tweet)
}

// Remove the tweet from the DOM
function deleteTweet(e) {
  e.preventDefault()
  if(e.target.className === 'delete-tweet') {
    e.target.parentElement.remove()
    deleteTweetLocalStorage(e.target.parentElement.innerText)
  }
}

// Show local storage data in the list
function localStorageReady() {
  let tweets
  tweets = getLocalStorageTweets()

  tweets.forEach(function(tweet) {
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
  });
}


// Add tweets to local storage
function addTweetLocalStorage(tweet) {
  let tweets
  tweets = getLocalStorageTweets(tweet)
  
  // Add new tweet
  tweets.push(tweet)

  // String to array (object)
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Check that there are items in local storage. Returns an array.
function getLocalStorageTweets() {
  let tweets

  // we check the local storage values
  if(localStorage.getItem('tweets') === null) {
    tweets = []
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'))
  }
  return tweets
}

// Delete tweet to local storage
function deleteTweetLocalStorage(tweet) {
  let tweets
  let tweetToDelete

  // Delete X to tweet
  tweetToDelete = tweet.substring(0, tweet.length - 1)

  tweets = getLocalStorageTweets()
  tweets.forEach(function(tweet, index) {
    if(tweetToDelete === tweet) {
      tweets.splice(index, 1)
    }
  })
  localStorage.setItem('tweets', JSON.stringify(tweets))
}
