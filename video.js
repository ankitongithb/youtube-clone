// Get URL parameters to load video data dynamically
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

// Sample video data
const videoData = {
    1: { title: 'Video Title 1', views: '1M views', time: '2 days ago' },
    2: { title: 'Video Title 2', views: '500K views', time: '1 week ago' },
    3: { title: 'Video Title 3', views: '2M views', time: '3 days ago' }
};

// Update the video title and views
if (videoId && videoData[videoId]) {
    document.getElementById('videoTitle').textContent = videoData[videoId].title;
    document.getElementById('videoViews').textContent = videoData[videoId].views + ' • ' + videoData[videoId].time;
}

// Like/Dislike buttons functionality
let likeCount = 0;
let dislikeCount = 0;

document.getElementById('likeBtn').addEventListener('click', () => {
    likeCount++;
    document.getElementById('likeCount').textContent = 'Likes: ' + likeCount;
});

document.getElementById('dislikeBtn').addEventListener('click', () => {
    dislikeCount++;
    document.getElementById('dislikeCount').textContent = 'Dislikes: ' + dislikeCount;
});

// Post comment functionality
document.getElementById('postCommentBtn').addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput').value;
    const commentsList = document.getElementById('commentsList');

    if (commentInput) {
        const newComment = document.createElement('div');
        newComment.textContent = commentInput;
        commentsList.appendChild(newComment);
        document.getElementById('commentInput').value = ''; // Clear the comment input
    }
});

// Load recommended videos
const recommendedVideos = [
    { title: 'Recommended Video 1', videoUrl: 'video.html?id=2' },
    { title: 'Recommended Video 2', videoUrl: 'video.html?id=3' },
    { title: 'Recommended Video 3', videoUrl: 'video.html?id=1' }
];

const recommendedList = document.getElementById('recommendedVideos');
recommendedVideos.forEach(video => {
    const videoItem = `<li><a href="${video.videoUrl}">${video.title}</a></li>`;
    recommendedList.innerHTML += videoItem;
});
