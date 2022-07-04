const layout = require("./layout")

module.exports = ({ posts }) => {
  const postsTemplate = posts.map( post => {
    let commentsTemplate = post.comments.map(comment => {
      return `<div class="comment">${comment}</div>`
    }).join('');
    return `
      <div class="grid-2 Post" id="${post.id}">
      <img src="data:image/png;base64, ${post.image}" class="post-image"/>        <div class="like-comment-area">
          <div class="likes-comments-counters">
            <label for="like-button-checkbox">
              <input type="checkbox" id="like-button-checkbox">
              <i class="fa-solid fa-heart like-button white"></i>
            </label>
            <span class="likes-count">${post.likesCount} likes</span>
            <label for="comment-button-checkbox">
              <input type="checkbox" id="comment-button-checkbox">
              <i class="fa-solid fa-comment comment-button white"></i>
            </label>
            <span class="comments-count">${post.commentsCount} comments</span>
          </div>
          <button class="new-comment-button">
            new comment
          </button>
        </div>
        <form class="add-new-comment hidden">
          <input type="text" placeholder="add new comment" class="new-comment-input" name="comment"/>
          <button class="share-comment-button">Share</button>
        </form>
        <div class="comments-container hidden">
          ${commentsTemplate}
        </div>
      </div>
    `
  }).join('')
  return layout({
    content: `
    <div class="root">
      <div class="new-post-container">
        <a href='/new-post' target="_blank">
          <i class="fa-solid fa-plus add-new-post"></i>
        </a>
      </div>
      <div class="posts-container">
      ${postsTemplate}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="helpers.js"></script>
    <script src="addNewComment.js"></script>
    <script src="commentsSection.js"></script>
    <script src="likeBtn.js"></script>
    <script src="index.js"></script>
    `
  })
}