Array.from(document.querySelectorAll('.Post')).forEach( post => {
  likeButtonFunctionality(post)
  commentsSectionFunctionality(post)
  addNewCommentFunctionality(post)
  shareNewCommentFunctionality(post);
  deleteButtonFunctionality(post);
})