import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const searchPosts = useMemo(() => {
        console.log("Worked function selectedPost")
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return searchPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);
    return sortAndSearchedPosts;
}