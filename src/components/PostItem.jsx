import React from 'react';
import Button from "../UI/button/Button";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}.{props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <Button onClick={() => props.remove(props.post)}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;