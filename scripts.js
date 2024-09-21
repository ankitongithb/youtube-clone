// Example video data
const videos = [
    {
        id: 1,
        title: 'Video Title 1',
        views: '1M views',
        time: '2 days ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=1',
    },
    {
        id: 2,
        title: 'Video Title 2',
        views: '500K views',
        time: '1 week ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=2',
    },
    {
        id: 3,
        title: 'Video Title 3',
        views: '2M views',
        time: '3 days ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=3',
    }
];

// Function to load videos dynamically
function loadVideos(videoArray) {
    const videoFeed = document.getElementById('videoFeed');
    videoFeed.innerHTML = ''; // Clear the video feed

    videoArray.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <a href="${video.videoUrl}">
                    <img src="${video.thumbnail}" alt="Video Thumbnail">
                </a>
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.time}</p>
            </div>
        `;
        videoFeed.innerHTML += videoCard;
    });
}

// Load all videos initially
loadVideos(videos);

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm)
    );
    loadVideos(filteredVideos);
});

// Sidebar toggle functionality for mobile
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
