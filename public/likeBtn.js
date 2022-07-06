const likeButtonFunctionality = post => {
  const likeButton = post.querySelector('.like-button');
  const likeButtonCheckbox = post.querySelector(`#like-button-checkbox-${post.id}`);
  const likesCount = post.querySelector('.likes-count');
  //used debounceHelper to prevent multiple request at the same time and reduce the stress on the server
  likeButton.addEventListener('click', debounceHelper(async () => {
    //check if the checkbox of the like button is checked or not
    if(!Array.from(likeButton.classList).includes('black')){
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
    await axios.post(url, { liked: Array.from(likeButton.classList).includes('black') }
      ,{
        'Content-Type': 'application/json'
      }
    )
  }, 300))
}