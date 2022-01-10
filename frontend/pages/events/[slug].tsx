import { getEventBySlug, getSlugs } from '../../utils/wordpress';
import Layout from '../../components/layout'

import styles from "./Event.module.scss";

export default function EventPage({ event }) {
	return (
		<Layout home={false}>
			<div className={styles["event"]}>
				<h1 className={styles["event__title"]}>{event.title.rendered}</h1>
				<div
					className={styles["event__content"]}
					dangerouslySetInnerHTML={{ __html: event.content.rendered }}
				></div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await getSlugs('events');

	return {
		paths,
		//this option below renders in the server (at request time) pages that were not rendered at build time
		//e.g when a new blogpost is added to the app
		fallback: 'blocking',
	};
}

//access the router, get the id, and get the medatada for that post
export async function getStaticProps({ params }) {
	const event = await getEventBySlug(params.slug);

	return {
		props: {
			event,
		},
		revalidate: 10, // In seconds
	};
}