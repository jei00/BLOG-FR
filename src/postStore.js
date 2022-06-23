import configData from "./config.js";

const url = `${configData.baseurl}/posts`;
const allPosts = async () => {
    const resp = await fetch(`${url}/`)
    return resp.json();
}

const findPost = async (postId) => {
    const resp = await fetch(`${url}/${postId}`)
    return resp.json();
}

const updatePost = async (postId, data) => {
    const resp = await fetch(`${url}/${postId}`, {
        method: 'PATCH', 
        mode: 'cors', 
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return find(postId)
}

const createPost = async (data) => {
    return fetch(`${url}/`, {
        method: 'POST', 
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

const deletePost = async (postId) => {
    return fetch(`${url}/${postId}/`, {
        method: 'DELETE', 
        mode: 'cors', 
        cache: 'no-cache',
    })
}


export { allPosts, findPost, createPost, updatePost, deletePost };