const layout = require("./layout")
const usersRepo = require('../../repositories/usersRepo');
const postsRepo = require("../../repositories/postsRepo");

module.exports = async ({ posts, req }) => {
  let postsTemplate  = '';
  
  for(let i = (posts.length - 1); i >= 0; i--){
    let post = posts[i];
    let didUserLike = await postsRepo.didUserLike(req.session.userId, post.id);
    let commentsTemplate = '';
    for(let i = post.comments.length - 1; i >= 0; i--){
      let comment = post.comments[i];
      commentsTemplate += `<div class="comment">
                            <span class="commenter">@${comment.commenter}:</span>
                            ${comment.comment}
                          </div>`
    }
    postsTemplate += `
            <div class="grid-2 Post" id="${post.id}">
            <div class="publisher-username">@${post.publisher}</div>
            <img src="data:image/png;base64, ${post.image}" class="post-image"/>        
            <div class="like-comment-area">
                <div class="likes-comments-counters">
                  <label for="like-button-checkbox-${post.id}">
                    <input type="checkbox" id="like-button-checkbox-${post.id}" class="like-button-checkbox" ${didUserLike ? 'checked':''}>
                    <i class="fa-solid fa-heart like-button ${didUserLike ? 'black':'white'}"></i>
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
  }
  return layout({
    content: `
    <div class="root">
      <div class="new-post-container-button">
        <a href='/new-post'>
          <i class="fa-solid fa-plus add-new-post"></i>
        </a>
      </div>
      <div class="posts-container">
      ${postsTemplate}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="helpers.js"></script>
    <script src="shareNewComment.js"></script>
    <script src="addNewComment.js"></script>
    <script src="commentsSection.js"></script>
    <script src="likeBtn.js"></script>
    <script src="index.js"></script>
    `,
    title: 'Pictures - Home Page'
  })
}