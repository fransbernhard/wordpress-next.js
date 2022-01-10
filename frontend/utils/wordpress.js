const BASE_URL = 'http://localhost:8000/wp-json/wp/v2';

export async function getPage(slug) {
    const postsRes = await fetch(BASE_URL + 'pages/?slug=' + slug);
    const posts = await postsRes.json();
    return posts;
}

export async function getAllPosts() {
    const postsRes = await fetch(BASE_URL + '/posts?_embed');
    const posts = await postsRes.json();
    return posts;
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}

export async function getAllEvents() {
    const eventsRes = await fetch(BASE_URL + '/events?_embed');
    const events = await eventsRes.json();
    return events;
}

export async function getEventBySlug(slug) {
    const eventRes = await fetch(BASE_URL + '/events/?slug=' + slug);
    const eventArray = await eventRes.json();
    const event = eventArray.length > 0 ? eventArray[0] : null;
    return event;    
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getAllPosts();
            break;
        case 'events':
            elements = await getAllEvents();
            break;
        }
        const elementsIds = elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
    return elementsIds;
}