// Library video data
const libraryVideos = [
    {
        id: 1,
        title: 'Library Video 1',
        views: '500K views',
        time: '1 week ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=1',
    },
    {
        id: 2,
        title: 'Library Video 2',
        views: '350K views',
        time: '2 weeks ago',
        thumbnail: 'https://via.placeholder.com/250x150',
        videoUrl: 'video.html?id=2',
    }
];

// Function to load library videos
function loadLibraryVideos() {
    const libraryFeed = document.getElementById('libraryFeed');
    libraryFeed.innerHTML = '';

    libraryVideos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <a href="${video.videoUrl}">
                    <img src="${video.thumbnail}" alt="Video Thumbnail">
                </a>
                <h3>${video.title}</h3>
                <p>${video.views} • ${video.time}</p>
            </div>
        `;
        libraryFeed.innerHTML += videoCard;
    });
}

// Load library videos when the page loads
loadLibraryVideos();
