import React, { useEffect, useState } from "react";
// import "../App.css"


let results = []

const getPost = () => {
   
   
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    //   body: JSON.stringify({

    //   }),
  })
    .then((res) => res.json())
    .then((result) => {
        results = result
        // console.log(results[1].title);

    }).then(() => {
        showPost()
    }).then(() =>{
        console.log(showPost())
    })
    .catch((err) => {
    });
};

const showPost = () => {
    let i;

    for (i = 0; i <= results.length; i++) {
      return (
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{results[i].title}</span>
                <p>{results[i].body}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
}

const Post = () => {

   return (
     // <h4>hello</h4>
     <button onClick={getPost}>click</button>
   );
 
 
  

};

export default Post;
