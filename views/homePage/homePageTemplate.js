const layout = require("./layout")

module.exports = ({ posts }) => {
  const postsTemplate = posts.map( post => {
    let commentsTemplate = post.comments.map(comment => {
      return `<div class="comment">${comment}</div>`
    }).join('');
    return `
      <div class="post" id="${post.id}">
      <img src="data:image/png;base64, ${post.image}" class="post-image"/>        <div class="like-comment-area">
          <div class="likes-comments-counters">
            <label for="like-button-checkbox">
              <input type="checkbox" id="like-button-checkbox">
              <i class="fa-solid fa-heart like-button"></i>
            </label>
            <span class="likes-count">${post.likesCount} likes</span>
            <label for="comment-button-checkbox">
              <input type="checkbox" id="comment-button-checkbox">
              <i class="fa-solid fa-comment comment-button"></i>
            </label>
            <span class="comments-count">${post.commentsCount} comments</span>
          </div>
          <button class="new-comment-button">
            new comment
          </button>
        </div>
        <form class="add-new-comment" method="POST" action="/newComment">
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
    <script src="index.js"></script>
    `
  })
}