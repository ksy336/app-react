import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService/PostService";

const PostId = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPageById(id);
        setPost(response.data);
    });
    const [commentPost, isComment, comError] = useFetching(async (id) => {
        const response = await PostService.getComment(id);
        setComment(response.data);
    });
    useEffect(() => {
        fetchPostById(params.id);
        commentPost(params.id);
    }, [])
    return (
        <div>
            <h1>You opened a post's page with id: {params.id}</h1>
            <div>{post.id}. {post.title}</div>
            <h2>Comments</h2>
            <div>
                {comments.map((comm) =>
                    <div key={comm.id} style={{marginTop: "30px"}}>
                        <h2>{comm.email}</h2>
                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostId;