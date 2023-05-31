import React from 'react';
import {Metadata} from "next";


async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    return {
        title: id
    }
}

async function Post({params: {id}}: Props) {
    let post = await getData(id);
    return (
        <>
            <h1>
                {post.title}
            </h1>
            <p>{post.body}</p>
        </>
    );
}

export default Post;