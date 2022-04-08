import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Index = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://ytv1b4w31k.microcms.io/api/v1/blog', {
            headers: {
                'Content-type': 'application/json',
                'X-MICROCMS-API-KEY': process.env.REACT_APP_API_KEY
            }
        })
            .then(res => {
                setPosts(res.data.contents)
            });
    }, []);

    return (
        <div>
            <p>Indexです</p>
            {
                posts.map(
                    post =>
                        <li key={post.id}>{post.title}</li>
                )
            }
        </div>
    )
}

export default Index