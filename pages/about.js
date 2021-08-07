import Error from "./_error";
import Layout from '../components/Layout';

const About = ({ user, statusCode }) => {

    if (statusCode) {
        return <Error statusCode={ statusCode }/>
    }

    return (
        <Layout title="About Me">
            <p>{ user.name }</p>
            <p>{ user.bio }</p>
            <img src={ user.avatar_url } alt={user.name} height="200px"/>
        </Layout>
    )
}

About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/a-dri-an-S");
    const statusCode = res.status > 200 ? res.status :  false;
    const data = await res.json()
    return { user: data, statusCode }
}

export default About;