const commentsSectionFunctionality = post => {
  const commentButton = post.querySelector('.comment-button');
  const commentsContainer = post.querySelector('.comments-container');
  commentButton.addEventListener('click', () => {
    commentButton.classList.toggle('white');
    commentButton.classList.toggle('black');
    commentsContainer.classList.toggle('hidden');
    determinePostClass(post);
  })
}