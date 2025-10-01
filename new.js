// new.html 用于发帖（存储于 localStorage）
document.getElementById('post-form').addEventListener('submit', function(e){
  e.preventDefault();
  const title = this.title.value.trim();
  const content = this.content.value.trim();
  if (!title || !content) return;
  let posts = JSON.parse(localStorage.getItem('szschool_forum_posts') || '[]');
  posts.push({ title, content, time: Date.now() });
  localStorage.setItem('szschool_forum_posts', JSON.stringify(posts));
  window.location.href = 'index.html';
});