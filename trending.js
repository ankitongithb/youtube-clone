// Trending video data
const trendingVideos = [
    {
        id: 1,
        title: 'Trending Video 1',
        views: '2M views',
        time: '1 day ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=1',
    },
    {
        id: 2,
        title: 'Trending Video 2',
        views: '1.5M views',
        time: '3 days ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=2',
    },
    {
        id: 3,
        title: 'Trending Video 3',
        views: '1M views',
        time: '5 days ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=3',
    }
];

// Function to load trending videos
function loadTrendingVideos() {
    const trendingFeed = document.getElementById('trendingFeed');
    trendingFeed.innerHTML = '';

    trendingVideos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <a href="${video.videoUrl}">
                    <img src="${video.thumbnail}" alt="Video Thumbnail">
                </a>
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.time}</p>
            </div>
        `;
        trendingFeed.innerHTML += videoCard;
    });
}

// Load trending videos when the page loads
loadTrendingVideos();
