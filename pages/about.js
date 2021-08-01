import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
    <Layout title="About Me">
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A JavaScript Programmer</p>
        <img src="/static/javascript-logo.png" alt="JavaScript" height="200px"/>
    </Layout>
)

export default About