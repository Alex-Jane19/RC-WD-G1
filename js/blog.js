'use strict';

const postsContainer = document.getElementById("posts-container");

// Fetch posts from the server
fetch('https://dummyjson.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        return response.json();
    })

    .then(data => {
        for (const post of data.posts) {
            // Create an article
            const article = document.createElement('article');
            article.classList.add('post');

            // Create a title
            const h2 = document.createElement('h2');
            h2.textContent = post.title;

            // Create a paragraph
            const p = document.createElement('p');
            p.textContent = post.body;

            // Add elements to the article
            article.append(h2, p);

            // Add the article to the page
            postsContainer.append(article);
        }
    })
    
    .catch(error => {
        console.error('Error:', error);
    });