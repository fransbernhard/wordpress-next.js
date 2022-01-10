import Link from "next/link";
import Image from "next/image";

import styles from "./ListEvent.module.scss";

export default function ListEvent({ events }) {
	return (
        <div className={styles["list-event"]}>
            <h1 className={styles["list-event__title"]}>Events</h1>
            <ul className={styles["list-event__list"]}></ul>
            {events.map((event) => (
                <div className={styles["list-event__item"]} key={event.id}>
                    <Link href={`/events/${event.slug}`}>
                        <a>
                            <Image
                            src={event['_embedded']['wp:featuredmedia'][0]["media_details"].sizes.medium["source_url"]}
                            width={288}
                            height={190}
                            alt={event['_embedded']['wp:featuredmedia'][0]["alt_text"]}
                            className="list-event__item-image"
                            />
                        </a>
                    </Link>

                    <h5 className="list-event__item-title">{event.title.rendered}</h5>
                    <div
                        className="list-event__item-text"
                        dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
                    ></div>

                    <Link href={`/events/${event.slug}`}>
                        <a className={styles["list-event__item-btn"]}>See more</a>
                    </Link>
                </div>
            ))}
        </div>
	);
}
