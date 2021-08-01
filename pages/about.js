import Link from 'next/link'

const About = () => (
    <div>
        <h1>About Me</h1>
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A JavaScript Programmer</p>
        <img src="/static/javascript-logo.png" alt="JavaScript" height="200px"/>
    </div>
)

export default About