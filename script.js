

//creates the tags for a post
const createPostElement = (post) => {
    const postnode = document.createElement('section');
    postnode.classList.add('post-node');
    document.body.appendChild(postnode);

    const postHeader= document.createElement('div');
    postHeader.classList.add('post-header');
    postnode.appendChild(postHeader);

    const symbols=document.createElement('div');
    symbols.classList.add('symbols');
    postnode.appendChild(symbols);

    const figure = document.createElement('figure');
    postnode.appendChild(figure);

    const figCaption = document.createElement('figcaption');
    figCaption.classList.add('caption');
    postnode.appendChild(figCaption);

    const postImage = document.createElement('img');
    postImage.setAttribute('src', post.image_url);
    figure.appendChild(postImage);


    const commentSquare=document.createElement('div');
    commentSquare.classList.add('comment-square');
    postnode.appendChild(commentSquare);

    const comments = document.createElement('div');
    comments.classList.add('comments');
    postnode.appendChild(comments);

    const commentText = document.createElement('p');
    commentText.classList.add('comment-text');
    comments.appendChild(commentText);

    const addComments = document.createElement('div');
    addComments.classList.add('addComments');
    
}



function loadPosts(postsobj) {
    let postsContainer = document.querySelector('all-nodes');
    postsContainer.innerHTML="";

    for (item of postsobj) {
        const toBeAppend = createPostElement(item);
        postsContainer.appendChild(toBeAppend);
    }
}

loadPosts();

const form = document.querySelector("post-form")

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const usernameInput = document.querySelector("username");
    const imageUrl = document.querySelector("imageURL")
    const commentInput = document.querySelector("comment");
    const newPost = {
        username: usernameInput,
        image_url: imageUrl,
        comments: commentInputt,
        like_count = 0,
    };



})