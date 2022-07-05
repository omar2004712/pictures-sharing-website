const shareNewCommentFunctionality = (post) => {
  const shareNewCommentForm = post.querySelector('.add-new-comment');
  const newCommentInput = post.querySelector('.new-comment-input');
  const commentsContainer = post.querySelector('.comments-container');
  const commentsCount = post.querySelector('.comments-count');
  const shareCommentButton = post.querySelector('.share-comment-button');
  shareNewCommentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if(!newCommentInput.value){
      //if the input is empty
      return;
    }
    let url = new URL(`http://localhost:3000/newComment/${post.id}`);
    let res = await axios.post(url, { comment: newCommentInput.value }, {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    ) 
    let {commenterUsername} = res.data; 
    const newComment = document.createElement('div');
    const commenterEl = document.createElement('span')
    commenterEl.classList.add('commenter');
    commenterEl.innerText = `@${commenterUsername}: `
    newComment.classList.add('comment');
    newComment.innerText = newCommentInput.value;
    newComment.prepend(commenterEl)
    commentsContainer.prepend(newComment);
    commentsCount.innerText = `${parseInt(commentsCount.innerText.split(' ')[0]) + 1} comments`

    newCommentInput.value = '';
  })  
}