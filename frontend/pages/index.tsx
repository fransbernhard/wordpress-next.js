import Head from 'next/head';
import Layout from '../components/layout'
import { getAllEvents, getAllPosts, getPage } from '../utils/wordpress';
import ListEvent from '../components/ListEvent/ListEvent';
import ListPost from '../components/ListPost/ListPost';

export default function Home({ events, posts }) {
  return (
    <Layout home>
      <Head>
        <meta
          name="home page"
          content="Home page"
        />
      </Head>

      <div className="container">
        <h1>Blog</h1>

        <ListPost posts={posts} />

        <ListEvent events={events} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
    const posts = await getAllPosts();
    const events = await getAllEvents();

    return {
        props: {
            posts,
            events,
        },
        revalidate: 10, // In seconds
    };
}