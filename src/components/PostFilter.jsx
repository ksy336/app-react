import React from 'react';
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                type="text"
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <Select
                value={filter.sort}
                onChange={searchPosts => setFilter({...filter, sort: searchPosts})}
                defaultOptions="Sort by"
                options={[
                    {value: "title", name: "Sort by name"},
                    {value: "body", name: "Sort by description"}
                ]}
            />
        </div>
    );
};

export default PostFilter;