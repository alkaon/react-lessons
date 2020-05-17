import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
      {props.message}
      <div>
        <span>like</span>
        <span>{props.like_counts}</span>
      </div>
    </div>
  );
};

export default Post;