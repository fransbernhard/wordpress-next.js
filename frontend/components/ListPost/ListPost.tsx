import Link from "next/link";
import Image from "next/image";

import styles from "./ListPost.module.scss";

export default function ListPost({ posts }) {
	return (
        <div className={styles["list-post"]}>
            <h1 className={styles["list-post__title"]}>Posts</h1>
            <ul className={styles["list-post__list"]}></ul>
            {posts.map((post) => (
                <div className={styles["list-post__item"]} key={post.id}>
                    <Link href={`/posts/${post.slug}`}>
                        <a>
                            <Image
                                src={post['_embedded']['wp:featuredmedia'][0]["media_details"].sizes.medium["source_url"]}
                                width={288}
                                height={190}
                                alt={post['_embedded']['wp:featuredmedia'][0]["alt_text"]}
                                className="list-post__item-image"
                            />
                        </a>
                    </Link>

                    <h5 className="list-post__item-title">{post.title.rendered}</h5>
                    <div
                        className="list-post__item-text"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    ></div>

                    <Link href={`/posts/${post.slug}`}>
                        <a className={styles["list-post__item-btn"]}>See more</a>
                    </Link>
                </div>
            ))}
        </div>
	);
}
