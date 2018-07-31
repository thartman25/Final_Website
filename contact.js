const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/tiffany';
const content = document.getElementById('content');
const text = document.getElementById('text');
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const name = document.getElementById('name');
// const helpful = document.getElementById('helpful');
// const not_helpful = document.getElementById('not_helpful');

getComments();

async function getComments() {
  var resp = await fetch(url);
  var comments = await resp.json();
  var html = "";
  comments.map((comment) => {
    html += `<div class="commentItem">`;
    html += `<span class="message">Comment: ${comment.message} </span>`;
    html += `<span class="email">Email: ${comment.email} <hr></span>`;
    // html += `<span class="helpful" id="CountedHelpfulClicks"><button onclick="AddClick()">Like: ${comment.helpful} </button></span>`;
    // html += `<span class="not_helpful"><button>Dislike: ${comment.not_helpful}</button><hr></span>`;
    // html += `<input class="completeTask" type="checkbox" id="${comment.id}"/>`;
    // html += `</div>`;
  })
  content.innerHTML = html;
}

submit.addEventListener('click', function() {
  postComment([{
    "message": text.value,
    "email": email.value,
    // "helpful": helpful.value,
    // "not_helpful": not_helpful.value,
  }]);
});


async function postComment(comment) {
  var resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  text.value = "";
  getComments();
}

content.addEventListener('click', function() {
  if (event.target.className === "task") {
    putComment([{
      id: event.target.id,
      completed: true
    }]);
  }
});

async function putComment(comment) {
  var resp = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  getComments();
}
var Clicks = 0 ;
function AddClick(){
Clicks = Clicks + 1;
document.getElementById('CountedHelpfulClicks').innerHTML = 'Helpful: '+ Clicks;
}
