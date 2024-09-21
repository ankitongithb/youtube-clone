// Subscriptions video data
const subscriptionsVideos = [
    {
        id: 1,
        title: 'Subscribed Channel Video 1',
        views: '300K views',
        time: '2 hours ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=1',
    },
    {
        id: 2,
        title: 'Subscribed Channel Video 2',
        views: '200K views',
        time: '4 hours ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=2',
    }
];

// Function to load subscribed videos
function loadSubscribedVideos() {
    const subscriptionsFeed = document.getElementById('subscriptionsFeed');
    subscriptionsFeed.innerHTML = '';

    subscriptionsVideos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <a href="${video.videoUrl}">
                    <img src="${video.thumbnail}" alt="Video Thumbnail">
                </a>
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.time}</p>
            </div>
        `;
        subscriptionsFeed.innerHTML += videoCard;
    });
}

// Load subscription videos when the page loads
loadSubscribedVideos();
