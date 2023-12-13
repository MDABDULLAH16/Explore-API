function LoadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => DisplayPosts(data));
}
LoadPosts();

function DisplayPosts(posts) {
  const postCount = document.getElementById("post-count");
  const getPostContainer = document.getElementById("posts-container");
  for (const post of posts) {
    postCount.innerText = posts.length;
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
     <div>
       <h4>Post ID ${post.id}</h4>
       <h1>Post Title ${post.title}</h1>
        <p>post Body ${post.body}</p>
     </div>
    `;
    getPostContainer.appendChild(div);
  }
}
