

//create postelements



function createPostElement (post) {
        
        const bigPostNode = document.createElement("section");
        bigPostNode.classList.add("post-node");
        

            const postHeader = document.createElement("div");
            postHeader.classList.add("post-header");
            bigPostNode.appendChild(postHeader);

                const username = document.createElement('div');
                username.classList.add('username');
                username.innerText = post.username;
                postHeader.appendChild(username);

                const symbols = document.createElement('div');
                symbols.classList.add('symbols');
                postHeader.appendChild(symbols);

                    //add symbols
                    const likeButton = document.createElement('button');
                    likeButton.innerHTML = "<i class='material-icons'>favorite_border</i>";
                    likeButton.classList.add('like-button');
                    console.log(post.id)
                    symbols.appendChild(likeButton);
                    likeButton.addEventListener('click', ()=>{
                        console.log('like post ' + post.id);
                    })

                    const commentButton = document.createElement('button');
                    commentButton.innerHTML = "<i class='material-icons'>mode_comment</i>";
                    commentButton.classList.add('comment-button');
                    symbols.appendChild(commentButton);
                    

                    const shareButton = document.createElement('button');
                    shareButton.innerHTML = "<i class='material-icons'>launch</i>";
                    shareButton.classList.add('share-button');
                    symbols.appendChild(shareButton);

            const figure = document.createElement('figure');
            bigPostNode.appendChild(figure);

                const image = document.createElement('img');
                image.setAttribute("src", post.image_url);
                figure.appendChild(image);

            const figureCaption = document.createElement('figcaption');
            figureCaption.classList.add('caption');
            bigPostNode.appendChild(figureCaption);
            
            const commentSquare = document.createElement('div');
            commentSquare.classList.add('comment-square');
            bigPostNode.appendChild(commentSquare);

                const comments = document.createElement('div');
                comments.classList.add('comments');
                commentSquare.appendChild(comments);

                    const commentText = document.createElement('p');
                    commentText.classList.add('comment-text');
                    commentText.innerHTML = "<i class='material-icons'> emoji_people</i>";
                    commentText.innerText = JSON.stringify(post.comments);
                    comments.appendChild(commentText);
                    
                const addComments = document.createElement('div');
                addComments.classList.add('add-comments');
                commentSquare.appendChild(addComments);

                    const commentForm = document.createElement('form');
                    commentForm.classList.add('comment-form');
                    commentForm.innerHTML = "<input type='text' placeholder='add a comment' id='comment-input'>\n <button type='submit' class='comment-post'>post</button>";
                    commentForm.addEventListener('submit', (event)=>{
                        event.preventDefault();
                        //gets value of the input 
                        const messageText = commentForm.querySelector('#comment-input').value;
                    })
                    addComments.appendChild(commentForm);

                        
            return bigPostNode;
    }


function loadPosts() {
    let postsContainer = document.querySelector('.all-nodes');
    postsContainer.innerHTML="";

    for (item of posts) {
        const toBeAppend = createPostElement(item);
        postsContainer.appendChild(toBeAppend);
    }
}

loadPosts();