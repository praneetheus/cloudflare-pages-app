import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const headers = {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

    const getPosts = async () => {
      const resp = await fetch(
        "https://rapid-scene-ae34.pk9.workers.dev/posts", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url 
        }
      );
      console.log(resp);
      const postsResp = await resp.json();
      setPosts(postsResp);
      console.log(postsResp)
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
        <div>
            Hello world
        </div>
    </div>
  );
};

export default Posts;