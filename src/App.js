
import './App.css';
import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostsList from "./components/PostsList";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import PostForm from "./components/PostForm";
import Select from "./UI/select/Select";

function App() {
   const [posts, setPosts] = useState([
       {id: 1, title: "Python", body:"Server language"},
       {id: 2, title: "Javascript", body:"browser language"},
       {id: 3, title: "Java", body:"For server"},
       {id: 4, title: "C", body:"For server"},
   ]);
   const [sortPosts, setSortPosts] = useState("");
   const [searchQuery, setSearchQuery] = useState("");
   
   const searchPosts = useMemo(() => {
       console.log("Worked function selectedPost")
       if(sortPosts) {
           return [...posts].sort((a, b) => a[sortPosts].localeCompare(b[sortPosts]));
       }
       return posts;
   }, [sortPosts, posts]);

   const createNewPost = (newPost) => {
       setPosts([...posts, newPost]);
   }
   const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
   }
   const sortPost = (sort) => {
       setSortPosts(sort);
   }
  return (
    <div className="App">
        <PostForm create={createNewPost} />
        <hr style={{margin: "15px 0", color: "teal"}}/>
        <input
            type="text"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
        />
        <Select
            value={sortPosts}
            onChange={sortPost}
            defaultOptions="Sort by"
            options={[
                {value: "title", name: "Sort by name"},
                {value: "body", name: "Sort by description"}
            ]}
        />
        {posts.length !== 0
            ? <PostsList remove={removePost} posts={searchPosts}/>
            : <h1>Posts not found</h1>
        }
    </div>
  );
}

export default App;
