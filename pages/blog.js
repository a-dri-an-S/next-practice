import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title }) => (
    <li>
        <Link title={title} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <PostLink title="react"/>
                <PostLink title="angular"/>
                <PostLink title="vue"/>
            </ul>
        </Layout>
    )
}

export default Blog;