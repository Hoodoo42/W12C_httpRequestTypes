
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
// the success function will run a success message if request is successful
function postSuccess(response) {

  let statusMessage = document.getElementById(`status_message`);
  statusMessage[`innerHTML`] = `<h3>Your post has been submitted!</h3>`;
}
// the failure function will run an error message if request is not successful
function postFailure(error) {
  statusMessage[`innerHTML`] = `<h3>Error!</h3>`;
}


// creating an axios request that will run when a button is clicked. This sets the button with an eventlistener
let submit = document.getElementById(`submit_button`);
submit.addEventListener(`click`, postPost);


