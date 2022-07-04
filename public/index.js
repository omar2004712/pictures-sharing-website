const posts = Array.from(document.querySelectorAll('.post')).map( post => {
  likeButtonFunctionality(post)
  commentsSectionFunctionality(post)
  return {
    likeButton: post.querySelector('.likeButton'),

  }
})