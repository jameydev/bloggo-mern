import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feed.css';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('/api/posts');
                setPosts(res.data);
            } catch (err) {
                console.error(`Error fetching posts': ${err}`);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <h1>Feed</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}