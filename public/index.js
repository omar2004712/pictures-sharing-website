Array.from(document.querySelectorAll('.Post')).forEach( post => {
  likeButtonFunctionality(post)
  commentsSectionFunctionality(post)
  addNewCommentFunctionality(post)
  shareNewCommentFunctionality(post);
  const navBar = document.querySelector('.nav-bar');
  window.addEventListener('scroll', () => {
    if(window.scrollY){
      navBar.classList.add('shadow-y');
    }
    else{
      navBar.classList.remove('shadow-y')
    }
  })
  const deleteButton = post.querySelector('.delete-button');
  if(deleteButton){
    deleteButton.addEventListener('click', () => {
      const url = new URL(`http://localhost:3000/delete/${post.id}`);
      axios.delete(url, {
        postId: post.id
      })
      window.location.reload();
    })
  }
})