const layout = require('./layout');

module.exports = ({ errors }) => {
  return layout({
    content: `<div>
                <form class="new-post-container" method="POST" enctype="multipart/form-data">
                  <label class="img-error">${errors.message || ''}</label>
                  <label class="custom-input" for="post-image">
                    <i class="fa-solid fa-image image-icon"></i>
                    <span class="upload-text">Upload an image</span>
                  </label>
                  <input id="post-image" type="file" name="post-image"/>            
                  <button class="post-button">Post</button>
                </form>
              </div>
            `,
    title: 'Pictures - New Post'
  })
}