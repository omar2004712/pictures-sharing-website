const deleteButtonFunctionality = (post) => {
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
}