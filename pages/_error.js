import Layout from '../components/Layout';

const Error = ({ statusCode }) => {
    return (
        <Layout title="Error">
            { statusCode ? 
                `Couldn't load your user data: Status Code ${statusCode}` 
                : "Page doesn't exist! Sorry!!"}
        </Layout>
    )
}

export default Error;