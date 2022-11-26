import Link from "next/link";

function PostList({ posts }) {
    return (
        <>
            <h1>List of Posts</h1>
            <p>https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/api/people/%5Bid%5D.ts</p>
            <p>https://www.youtube.com/watch?v=d5unMDna5ng&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=29</p>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>{post.id}: {post.title}</h2>
                        </Link>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            // posts: data.slice(0, 3),
            posts: data
        }
    }
}