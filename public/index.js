Array.from(document.querySelectorAll('.Post')).forEach( post => {
  likeButtonFunctionality(post)
  commentsSectionFunctionality(post)
  addNewCommentFunctionality(post)
  const shareNewCommentForm = post.querySelector('.add-new-comment');
  const newCommentInput = post.querySelector('.new-comment-input');
  const commentsContainer = post.querySelector('.comments-container');
  const commentsCount = post.querySelector('.comments-count');
  const shareCommentButton = post.querySelector('.share-comment-button');
  shareNewCommentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!newCommentInput.value){
      //if the input is empty
      return;
    }
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerText = newCommentInput.value;
    commentsContainer.prepend(newComment);
    commentsCount.innerText = `${parseInt(commentsCount.innerText.split(' ')[0]) + 1} comments`
    let url = new URL(`http://localhost:3000/newComment/${post.id}`);
    axios({
      url,
      method: 'post',
      data: JSON.stringify({
        comment: newCommentInput.value
      })
    })
    newCommentInput.value = '';
  })  
})