
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Post(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
    getPostDetails();
  }, []);

  function getPostDetails() {
    axios
      .get(`https://learn-react-61a98-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`)
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
  }

  if (post) {
    return (
      <div>
        <div>Id:{post.id}</div>
        <div>Tittle:{post.id1.title}</div>
        <div>Description:{post.id1.name}</div>
      </div>
    );
  }
  return null;
}

export default Post;
