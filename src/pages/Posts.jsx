
import '../App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import PostsList from "../components/PostsList";
import Button from "../UI/button/Button";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../UI/modal/Modal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService/PostService";
import {getPageCount, getPages} from "../utils/page";
import Pagination from "../UI/pagination/pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const observer = useRef();
    console.log(lastElement);

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts() {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    }

    useEffect(() => {
        fetchPosts();
    }, [page])

    const getMorePosts = (page) => {
        setPage(page);
    }

    useEffect(() => {
        if(observer.current) observer.current.disconnect();
        var callback = function(entries, observer) {
            if(entries[0].isIntersecting && page < totalPages) {
                console.log(page);
                setPage(page + 1);
            }
            console.log(entries)
            console.log("Div is here")
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, []);

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get posts</button>
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
            <PostsList remove={removePost} posts={sortAndSearchedPosts} title= "Posts about js" />
            <div ref={lastElement} style={{height: "30px", background: "red"}}/>
            <Pagination
                page={page}
                totalPages={totalPages}
                getMorePosts={getMorePosts}/>
        </div>
    );
}

export default Posts;
