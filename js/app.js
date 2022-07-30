// FUNCTIONS --

// PART ONE - Method POST - Function
// the eventlistener function houses the axios request, and the values that are going to be entered by the user.
function postPost(details) {
  let postTitleValue = document.getElementById(`post_title`)[`value`];
  let userValue = document.getElementById(`user_name`)[`value`];
  let postValue = document.getElementById(`post_body`)[`value`];
  axios
    .request({
      url: `https://jsonplaceholder.typicode.com/posts`,

      method: `POST`,
      data: {
        title: postTitleValue,
        body: postValue,
        userId: userValue,
      },
    })
    .then(postSuccess)
    .catch(postFailure);
}
// PART ONE - Method POST success/failure Functions
// the success function will run a success message if request is successful
function postSuccess(response) {
  let statusMessage = document.getElementById(`status_message`);
  statusMessage[`innerHTML`] = `<h3>Your post has been submitted!</h3>`;
}
// the failure function will run an error message if request is not successful
function postFailure(error) {
  statusMessage[`innerHTML`] = `<h3>Error!</h3>`;
}



// PART TWO - Method PATCH success/failure Functions
function postUpdateSuccess(response) {
  let statusMessage = document.getElementById(`status_message`);
  statusMessage[`innerHTML`] = `<h3>Your post has been updated!</h3>`;
}

function postUpdateFailure(error) {
  statusMessage[`innerHTML`] = `<h3>Error!</h3>`;
}

// PART THREE - Method DELETE success/failure functions
function deleteSuccess(response) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <h3>your post has been deleted</h3>`
  );
}
function deleteFailure(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <h3>your post has NOT been deleted</h3>`
  );
}

// PART FOUR - Method GET - success/failure Functions
function getPostSuccess(response) {
  for (i = 0; i < response[`data`].length; i++) {
    let posts = document.getElementById(`posts_container`);
    
    posts[`innerHTML`] = posts[`innerHTML`] +
      `<h2>${response[`data`][i][`title`]}</h2>` +
      `<h3>${response[`data`][i][`userId`]}</h3>` +
      `<h3 class="displayed_post_body">${response[`data`][i][`body`]}</h3>`;
    

   
  }
}
// document.body.insertAdjacentHTML(`beforeend`,
//     `<h2>${response[`data`][i][`title`]}</h2>
//     <h3>${response[`data`][i][`userId`]}</h3>
//     <h3>${response[`data`][i][`body`]}</h3>`)

function getPostFailure(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <h3>Post Error!</h3>`
  );
}

//  AXIOS REQUESTS --

    // PART TWO - Method PATCH axios.request
// this axios request is a patch, it will take the new data in title, and update the old post title.
axios
.request({
  url: `https://jsonplaceholder.typicode.com/posts/1`,

  method: `PATCH`,

  data: {
    title: `This will be the new title.`,
  },
})
.then(postUpdateSuccess)
.catch(postUpdateFailure);


//   PART THREE - Method DELETE axios.request
// this axios request method delete, deletes the post targeted in the endpoint
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts/1`,

    method: `DELETE`,
  })
  .then(deleteSuccess)
  .catch(deleteFailure);

// PART FOUR - Method GET - Axios request - will grab a list of posts to be displayed
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`,
  })
  .then(getPostSuccess)
  .catch(getPostFailure);

//  EVENT LISTENERS --
//   PART ONE - Method POST button eventListener
// creating an axios request that will run when a button is clicked. This sets the button with an eventlistener
let submit = document.getElementById(`submit_button`);
submit.addEventListener(`click`, postPost);






// starting to make the post update happen with button click not just on the page load.

// let update = document.getElementById(`update_button`);
// update.addEventListener(`click`, updatePost);