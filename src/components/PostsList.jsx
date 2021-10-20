import React from 'react';
import PostItem from "./PostItem";
import CSSTransition from "react-transition-group/cjs/CSSTransition";
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";

const PostsList = ({posts, remove}) => {
    if(!posts.length) {
        return (
            <h1>Posts not found</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>List of posts</h1>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                     <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostsList;