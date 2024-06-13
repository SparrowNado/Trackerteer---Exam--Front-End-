// document.addEventListener('DOMContentLoaded', () => {
//     const videoMap = {
//         item1: '/videos/piano1vid.mp4',
//         item2: '/videos/piano2vid.mp4',
//         item3: '/videos/piano3vid.mp4',
//         item4: '/videos/piano4vid.mp4',
//         item5: '/images/stillphoto.webp' 
//     };

//     const videoContainer = document.querySelector('.video-containers video');
//     const stillPhoto = document.querySelector('.video-containers img');

//     document.querySelectorAll('.selection-item').forEach(item => {
//         item.addEventListener('click', () => {
//             const videoSrc = videoMap[item.id];

//             if (videoSrc.endsWith('.webp')) {
//                 videoContainer.style.display = 'none';
//                 stillPhoto.src = videoSrc;
//                 stillPhoto.style.display = 'block';
//             } else {
//                 stillPhoto.style.display = 'none';
//                 videoContainer.src = videoSrc;
//                 videoContainer.style.display = 'block';
//                 videoContainer.play();
//             }
//         });
//     });
// });





document.addEventListener('DOMContentLoaded', () => {
    const videoMap = {
        item1: '/videos/piano1vid.mp4',
        item2: '/videos/piano2vid.mp4',
        item3: '/videos/piano3vid.mp4',
        item4: '/videos/piano4vid.mp4',
        item5: '/images/stillphoto.jpg' 
    };

    const videoContainer = document.querySelector('.video-containers video');
    const stillPhoto = document.querySelector('.video-containers img');

    document.querySelectorAll('.selection-item').forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = videoMap[item.id];

            if (videoSrc.endsWith('.jpg')) {
                videoContainer.style.display = 'none';
                stillPhoto.src = videoSrc;
                stillPhoto.style.display = 'block';
            } else {
                stillPhoto.style.display = 'none';
                videoContainer.src = videoSrc;
                videoContainer.style.display = 'block';
                videoContainer.play();
            }
        });
    });

    // Ensure video plays correctly when loaded
    videoContainer.addEventListener('loadeddata', () => {
        videoContainer.play();
    });
});