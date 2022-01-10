import { getPost, getSlugs } from "../../utils/wordpress";
import Layout from '../../components/layout'

export default function PostPage({ post }) {
	return (
		<Layout home={false}>
			<h1 className="post__title">{post.title.rendered}</h1>
			<div
				className="post__text"
				dangerouslySetInnerHTML={{ __html: post.content.rendered }}
			></div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await getSlugs("posts");

	return {
		paths,
		//this option below renders in the server (at request time) pages that were not rendered at build time
		//e.g when a new blogpost is added to the app
		fallback: "blocking",
	};
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
	const post = await getPost(params.slug);

	return {
		props: {
			post,
		},
		revalidate: 10, // In seconds
	};
}
