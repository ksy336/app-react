
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
import Modal from "./UI/modal/Modal";
import {usePosts} from "./hooks/usePosts";

function App() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({sort: "", query: "" });
   const [modal, setModal] = useState(false);
   const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

   const createNewPost = (newPost) => {
       setPosts([...posts, newPost]);
   }
   const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
   }

  return (
    <div className="App">
        <Button
            style={{marginTop: "30px"}}
            onClick={() => setModal(true)}> Create Post </Button>
        <Modal
            visible={modal}
            setVisible={setModal}
            >
            <PostForm create={createNewPost} />
        </Modal>
        <hr style={{margin: "15px 0", color: "teal"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostsList remove={removePost} posts={sortAndSearchedPosts} />
    </div>
  );
}

export default App;
