const layout = require('../layout');

module.exports = () => {
  const result =  layout({
    content: `<div>
                <form class="new-post-container" method="POST" enctype="multipart/form-data">
                  <label for="post-image">
                    <i class="fa-solid fa-image image-icon"></i>
                    <span class="upload-text">Upload an image</span>
                  </label>
                  <input required id="post-image" type="file" name="post-image"/>            
                  <button class="post-button">Post</button>
                </form>
              </div>
            `
  })
  console.log('result: ', result);
  return result
}