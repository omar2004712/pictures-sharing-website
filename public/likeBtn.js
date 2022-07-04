const likeButtonFunctionality = post => {
  const likeButton = post.querySelector('.like-button');
  const likeButtonCheckbox = post.querySelector('#like-button-checkbox');
  const likesCount = post.querySelector('.likes-count');
  likeButton.addEventListener('click', () => {
    //check if the checkbox of the like button is checked or not
    if(!likeButtonCheckbox.checked){
      //if not means the checkbox is being checked
      //increment the likes count
      let value = parseInt(likesCount.innerText.split(' ')[0]) + 1;
      likesCount.innerText = `${value} likes`;
      //change the color of the like button to black
    }
    else{
      //else means the checkbox is being unchecked
      //decrement the likes count
      let value = parseInt(likesCount.innerText.split(' ')[0]) - 1;
      likesCount.innerText = `${value} likes`;
      //change the color of the like button to white
    }
    likeButton.classList.toggle('white');
    likeButton.classList.toggle('black');
    //send an axios request to /like/postid with data of wether the user liked or not
    let url = new URL(`http://localhost:3000/like/${post.id}`)
    axios({
      url,
      method: 'post',
      data: JSON.stringify({
        liked: likeButton.style.color === "black",
      })
    })
  })
}