

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
                const image_url = post.image_url || 'https://cdn.shopify.com/s/files/1/1061/1924/products/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png';
                image.setAttribute("src", image_url);
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
                    //commentText.innerHTML = "<i class='material-icons'> emoji_people</i>";
                    
                    
                if (post['comments']) {
                    for (i=0; i<post['comments'].length; i++){

                        let newMsg = document.createElement('p');
                        // let newIcon = document.createElement('i');
                        // newIcon.classList.add('material-icons');
                        // newIcon.innerText = 'emoji_people';
                        // comments.appendChild(newIcon);
                        //newMsg.innerHTML= `<i class='material-icons'> emoji_people</i>`;
                        newMsg.classList.add('comment-text');
                        newMsg.innerText=  post.comments[i]['message'];
                        
                        comments.appendChild(newMsg);
                    }
                }

                    
                     comments.appendChild(commentText);

                    
                const addComments = document.createElement('div');
                addComments.classList.add('add-comments');
                commentSquare.appendChild(addComments);

                    const commentForm = document.createElement('form');
                    commentForm.classList.add('comment-form');
                    commentForm.innerHTML = "<input type='text' placeholder='add a comment' id='comment-input'>\n <button type='submit' class='comment-post'>post</button>";
                    commentForm.addEventListener('submit', (event)=>{
                        event.preventDefault();
                        const messageText = commentForm.querySelector('#comment-input').value;
                        let addedMsg = document.createElement('p');
                        addedMsg.classList.add('comment-text');
                        //addedMsg.innerText= messageText;
                        //comments.appendChild(addedMsg);

                        let commenturl = `https://instasam-one.herokuapp.com/api/insta_posts/${post.id}/comments`

                        fetch(url,  fetch(commenturl, {
                            method: 'POST',
                            headers: new Headers({"Content-Type": "application/json"}),
                            body: JSON.stringify({
                                "message": messageText,
                              }) // posts to url 
                    
                        }).then(()=> {(location.reload())})//refreshes page
                        .then(()=> fetchData())//to redisplay items 
                        .catch((err)=> console.log(err)))


                        

                        
                    })
                    addComments.appendChild(commentForm);



                        
            return bigPostNode;
    }


function loadPosts(newposts) {
    let postsContainer = document.querySelector('.all-nodes');
    postsContainer.innerHTML="";

    newposts.forEach((item)=>  {
        const toBeAppend = createPostElement(item);
        postsContainer.appendChild(toBeAppend);
    })
}

//to post locally 
//loadPosts(newposts);

// const postForm = document.querySelector('#post-form');
// postForm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     let postUsername = document.querySelector('#username-input').value;
//     let postImgUrl = document.querySelector('#post-img-url').value;
//     let comment = document.querySelector('#post-caption').value;

//     let newUserPost = {
//         username: postUsername,
//         comments: [{message: comment}],
//         image_url: postImgUrl,
//     }

//     //posts.push(newUserPost);
    
//     //loadPosts();
//     postData();


// })

function formatMsg(postComments) {
    //console.log(postComments)
    for (i=0; i<postComments.length; i++) {
        const newMsg = document.createElement('p');
        newMsg.classList.add('comment-text');
        newMsg.innerHTML = "<i class='material-icons'> emoji_people</i>";
        newMsg.innerText = postComments[i][message];
        comments.appendChild(newMsg);
        

        //console.log(postComments[i]['message'])

    }
}

//fetch data from api
const url = 'https://instasam-one.herokuapp.com/api/insta_posts';

function fetchData () {
fetch(url)
.then((data) => data.json())
.then((posts) => {
    posts = posts.reverse();
    console.log(posts); 
    loadPosts(posts)
})
.catch(console.error)

}

//someproblem with posts??? 


const postForm = document.querySelector('#post-form');
postForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let username = document.querySelector('#username-input').value;
    let IMGpost = document.querySelector('#post-img-url').value;
    let postCap = document.querySelector('#post-caption').value;

    fetch(url, {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
            "username": username, 
            "message": postCap,
            "image_url": IMGpost,
            "comments": []
          }) // posts to url 

    }).then(()=> {(location.reload())})//refreshes page
    .then(()=> fetchData())//to redisplay items 
    .catch((err)=> console.log(err));
})

fetchData()

let openButton = document.querySelector('.unhide-button');
openButton.addEventListener('click', (event)=>{
    event
})