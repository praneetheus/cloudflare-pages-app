import React, { useEffect, useState } from "react";
// import axios from 'axios';
import { Button, FormControl, InputLabel, TextField, FormHelperText, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Posts() {
    const [title, setTitle] = useState([]);
    const [username, setUsername] = useState([]);
    const [content, setContent] = useState([]);

    const classes = useStyles();

    const handleSubmit = () => {
    console.log("Hello")
    }

  return (
    <div>
        <FormControl>
            <InputLabel htmlFor="my-input">Title</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
        Add
        </Button>
    </div>    
  );
}

/*
const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const getPost = async () => {
//     //   const resp = await fetch(
//     //     "https://rapid-scene-ae34.pk9.workers.dev/posts"
//     //   );
//     // axios.get(`https://rapid-scene-ae34.pk9.workers.dev/posts`)
//     axios.get('http://127.0.0.1:8787/posts')
//         .then(function (response) {
//             // handle success
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//         });

//     //   const postsResp = await resp.body.getReader();
//     //   console.log(postsResp)
//     //   setPosts(postsResp);
//     };

//     getPost();
//   }, []);

    // const data = { title: 'good example',  username: 'exampleman2', content:'hello world!!'};
    // axios.post(`https://rapid-scene-ae34.pk9.workers.dev/posts`, { ...data }, {
    //     headers: {
    //       "Content-Type": "text/plain",
    //     },
    //   })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })

    // fetch('https://rapid-scene-ae34.pk9.workers.dev/posts', {
    // method: 'POST',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    // console.log('Success:', data);
    // })
    // .catch((error) => {
    // console.error('Error:', error);
    // });
    const handleSubmit = event => {
        console.log(event)
        event.preventDefault();
    }
  
    return (
    <div className="wrapper">
    <h1>How About Them Apples</h1>
    <form onSubmit={handleSubmit} > 
    <fieldset>
       <label>
         <p>Name</p>
         <input name="name" />
       </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
  </div>

  );
};

*/
// export default Posts;