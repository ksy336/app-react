import React, {useState} from 'react';
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""});
    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: "", body: ""})
    }

    return (
        <form>
            <Input
                value={post.title}
                type="text"
                placeholder="Name of post"
                onChange={e => setPost({...post, title: e.target.value })}
            />
            <Input
                type="text"
                placeholder="Description of post"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value })}
            />
            <Button type="submit" onClick={createPost}>Create post</Button>
        </form>
    );
};

export default PostForm;