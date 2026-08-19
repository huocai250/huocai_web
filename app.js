const POST_INDEX='posts.json';
const escapeHtml=(value='')=>value.replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
function renderPosts(posts){const list=document.querySelector('#post-list');if(!list)return;if(!posts.length){list.innerHTML='<p class="loading">还没有文章。<a href="editor.html">写下第一篇 →</a></p>';return;}list.innerHTML=posts.sort((a,b)=>b.date.localeCompare(a.date)).map(post=>`<a class="post-card" href="article.html?slug=${encodeURIComponent(post.slug)}"><span class="post-date">${post.date}</span><div><span class="tag"># ${post.tag||'TECH'}</span><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.summary)}</p></div><span class="post-arrow">→</span></a>`).join('');}
fetch(POST_INDEX).then(response=>response.json()).then(renderPosts).catch(()=>{const list=document.querySelector('#post-list');if(list)list.innerHTML='<p class="loading">文章索引加载失败，请稍后再试。</p>';});

