const addNewCommentFunctionality = post => {
  const newCommentButton = post.querySelector('.new-comment-button');
  const addNewCommentForm = post.querySelector('.add-new-comment');
  const commentsContainer = post.querySelector('.comments-container');
  newCommentButton.addEventListener('click', () => {
    addNewCommentForm.classList.toggle('hidden');
    determinePostClass(post);
  })
}