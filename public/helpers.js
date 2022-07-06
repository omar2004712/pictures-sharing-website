const classIncluded = (el, cssClass) => {
  return Array.from(el.classList).includes(cssClass);
}

const determinePostClass = (post) => {
  const newCommentButton = post.querySelector('.new-comment-button');
  const addNewCommentForm = post.querySelector('.add-new-comment');
  const commentsContainer = post.querySelector('.comments-container');
  if(classIncluded(commentsContainer, 'hidden')){
    if(classIncluded(addNewCommentForm, 'hidden')){
      post.classList.remove('post', 'grid-3', 'grid-3-new-comment');
      post.classList.add('grid-2');
    }
    else{
      post.classList.remove('post', 'grid-3', 'grid-2');
      post.classList.add('grid-3-new-comment');
    }
  }
  else{
    if(classIncluded(addNewCommentForm, 'hidden')){
      post.classList.remove('post', 'grid-2', 'grid-3-new-comment');
      post.classList.add('grid-3');
    }
    else{
      post.classList.remove('grid-3-new-comment', 'grid-3', 'grid-2');
      post.classList.add('post');
    }
  }
}

const debounceHelper = (func, delay)=>{
  let timeoutId;
  //this function will take in a func and debounce it and return the new function definition
  const debounceFunc = (...args)=>{ 
      if(timeoutId){
          clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(()=>{
          func.apply(null, args);
      }, delay);
  }
  return debounceFunc;
}