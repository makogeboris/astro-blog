# Frontend Mentor - Personal blog solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Navigate to all pages by clicking links or using their keyboard
- Read all articles
- Select their color theme
- Submit their email to subscribe to the newsletter
- Receive an error message when the newsletter form is submitted if:
  - The Email Address field is empty
  - The Email Address is not formatted correctly
- Receive a success message if submitted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/images/preview.jpg)

### Links

- [Live Site](https://pau-blog-astro.netlify.app/)

### Built with

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

### What I learned

I learned how to use `getCollection("blog")` to fetch and display MDX posts dynamically. I initially wanted to get the data for the blog posts directly from the `data.json` file provided, but I realized that it wouldn’t support Markdown or MDX formatting.
Instead, I decided to use Astro’s content collections and MDX files which allowed me to write blog posts in Markdown/MDX, making it easier to format the content.

```js
// Fetch all blog posts from the "blog" content collection
const posts: CollectionEntry<"blog">[] = await getCollection("blog");
```

Taking this approach helped me better understand dynamic routing in Astro, as I needed to set up [slug].astro and `getStaticPaths()` to handle individual blog posts.

```js
// Define getStaticPaths to generate all possible paths
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map(
    (post: { slug: string; data: { title: string; publishedAt: string } }) => ({
      params: { slug: post.slug },
      props: { post },
    }),
  );
}
```

```js
// Access the post data passed from getStaticPaths
const {
  post,
}: { post: { slug: string; data: { title: string; publishedAt: string } } } =
  Astro.props;

// Render the MDX content of the post
const { Content } = await render(post);
```

This project helped me understand the strengths of Astro’s approach to content-driven sites and how to structure a blog efficiently.

## Author

- Frontend Mentor - [makogeboris](https://www.frontendmentor.io/profile/makogeboris)
- Twitter - [makogeboris](https://x.com/makogeboris)
