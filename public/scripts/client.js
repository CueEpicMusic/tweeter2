/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const loadtweets = function () {
  $
}

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    createTweetElement(tweet);
  }
};

const createTweetElement = function (data) {
  let $tweet = `<article>
        <header>
          <div class="tweeter-name">
            <img src="${data.user.avatars}">
            <p>${data.user.name}</p>
          </div>
          <div class="tweeter-handle">
            <strong>${data.user.handle}</strong>
          </div>
        </header>
        <div class="tweeter-tweet">
          <strong>${data.content.text}</strong>
        </div>
        <footer>
          <span>${data.created_at}</span>
          <ul>
            <li>
              <i class="fa-solid fa-flag"></i>
            </li>
            <li>
              <i class="fa-solid fa-retweet"></i>
            </li>
            <li>
              <i class="fa-solid fa-heart"></i>
            </li>
          </ul>
        </footer>
      </article>`;
  return $(".main-tweets").append($tweet);
};

$(document).ready(function () {
  renderTweets(data);

  $("#tweet-form").on("submit", function (event) {
    event.preventDefault();
    const tweet = $(this).serialize();
    console.log(tweet)
    $.post("/tweets", tweet).then((data) => {
      console.log(data);
    });
  });
});
