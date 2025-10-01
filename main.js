// index.html 用于加载帖子列表（本地存储实现）
function loadPosts() {
  const postList = document.getElementById('post-list');
  let posts = JSON.parse(localStorage.getItem('szschool_forum_posts') || '[]');
  postList.innerHTML = '';
  if (posts.length === 0) {
    postList.innerHTML = '<li>暂无帖子，快去发帖吧！</li>';
    return;
  }
  posts.reverse().forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="post-title">${post.title}</div>
    <div class="post-content">${post.content}</div>`;
    postList.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', loadPosts);