
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
import PostFilter from "./components/PostFilter";

function App() {
   const [posts, setPosts] = useState([
       {id: 1, title: "Python", body:"Server language"},
       {id: 2, title: "Javascript", body:"browser language"},
       {id: 3, title: "Java", body:"For server"},
       {id: 4, title: "C", body:"For server"},
   ]);
   const [filter, setFilter] = useState({sort: "", query: "" })

   const searchPosts = useMemo(() => {
       console.log("Worked function selectedPost")
       if(filter.sort) {
           return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
       }
       return posts;
   }, [filter.sort, posts]);

   const sortAndSearchedPosts = useMemo(() => {
       return searchPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
   }, [filter.query, searchPosts]);

   const createNewPost = (newPost) => {
       setPosts([...posts, newPost]);
   }
   const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
   }

  return (
    <div className="App">
        <PostForm create={createNewPost} />
        <hr style={{margin: "15px 0", color: "teal"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {sortAndSearchedPosts.length !== 0
            ? <PostsList remove={removePost} posts={sortAndSearchedPosts}/>
            : <h1>Posts not found</h1>
        }
    </div>
  );
}

export default App;
