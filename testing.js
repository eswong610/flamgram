const posts = [
    {
      id: 1,
      username: "whoelsebutsam",
      message: "This is a cat! 😸",
      image_url: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      like_count: 2,
      comments: [
        {
          message: "I also like cats"
        },
        {
          message: "Yeah, me too"
        }
      ]
    }]


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

formatMsg(posts[0]['comments'])