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
    alert('Tweet Deleted')
  }
}

// Add tweets to local storage
function addTweetLocalStorage(tweet) {
  let tweets
  tweets = getLocalStorageTweets(tweet)
  
  // Add new tweet
  tweets.push(tweet)

  // String to array
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

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


