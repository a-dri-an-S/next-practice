import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const About = ({ user }) => {

    return (
        <Layout title="About Me">
            <p>{ user.name }</p>
            <p>{ user.bio }</p>
            <img src={ user.avatar_url } alt={user.name} height="200px"/>
        </Layout>
    )
}

About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/a-dri-an-S")
    const data = await res.json()
    return { user: data }
}

export default About