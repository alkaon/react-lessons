import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' like_counts='10' />
        <Post message='Your pidor!' like_counts='666' />

      </div>
    </div>
  );
};

export default MyPosts;