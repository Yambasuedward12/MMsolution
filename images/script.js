const blogsContainer = document.getElementById('blogs');
const loader = document.getElementById('loader');

// Function to calculate relative time
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + (interval === 1 ? " day ago" : " days ago");
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + (interval === 1 ? " hour ago" : " hours ago");
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}

// Fetch articles from the new API
async function fetchArticles() {
    try {
        const response = await fetch('https://remember-1.onrender.com/sportsup_news');
        const articles = await response.json();

        // Clear existing content
        blogsContainer.innerHTML = '';

        // Loop through the articles and create cards
        articles.forEach(article => {
            const blogCard = document.createElement('a');
            blogCard.classList.add('blog-card');
            blogCard.href = article.page.url;
            blogCard.target = "_blank";

            blogCard.innerHTML = `
                <img src="${article.imageUrl}" alt="${article.title}">
                <div class="content">
                    <h2>${article.title}</h2>
                    <p>${article.lead || 'Click to read more.'}</p>
                    <div class="source">
                        <img src="${article.sourceIconUrl}" alt="${article.sourceStr}">
                        <span>|</span>
                        <span>${article.sourceStr}</span>
                        <span>|</span>
                        <p>${timeAgo(article.gmtTime)}</p>
                    </div>
                </div>
            `;

            blogsContainer.appendChild(blogCard);
        });

        // Hide loader once the articles are loaded
        loader.style.display = 'none';
    } catch (error) {
        console.error('Error fetching articles:', error);
        blogsContainer.innerHTML = '<p>Unable to load articles at the moment. Please try again later.</p>';
        loader.style.display = 'none';
    }
}

// Call the function to fetch and display articles
fetchArticles();