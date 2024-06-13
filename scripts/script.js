





// document.addEventListener('DOMContentLoaded', () => {
//     const videoMap = {
//         item1: '/videos/piano1vid.mp4',
//         item2: '/videos/piano2vid.mp4',
//         item3: '/videos/piano3vid.mp4',
//         item4: '/videos/piano4vid.mp4',
//         item5: '/images/stillphoto.jpg' 
//     };

//     const videoContainer = document.querySelector('.video-containers video');
//     const stillPhoto = document.querySelector('.video-containers img');

//     function playVideo(src) {
//         if (src.endsWith('.jpg')) {
//             videoContainer.style.display = 'none';
//             stillPhoto.src = src;
//             stillPhoto.style.display = 'block';
//         } else {
//             stillPhoto.style.display = 'none';
//             videoContainer.src = src;
//             videoContainer.style.display = 'block';
//             videoContainer.play();
//         }
//     }

//     // Autoplay video for item1 on page load
//     playVideo(videoMap['item1']);

//     document.querySelectorAll('.selection-item').forEach(item => {
//         item.addEventListener('click', () => {
//             const videoSrc = videoMap[item.id];

//             playVideo(videoSrc);

//             // Change overflow property of the respective paragraph and handle spacing
//             document.querySelectorAll('.selection-text-container-paragraph').forEach(paragraph => {
//                 paragraph.classList.remove('visible');
//             });

//             const paragraph = item.querySelector('.selection-text-container-paragraph');
//             paragraph.classList.add('visible');
//         });
//     });

//     // Ensure video plays correctly when loaded
//     videoContainer.addEventListener('loadeddata', () => {
//         videoContainer.play();
//     });
// });















// document.addEventListener('DOMContentLoaded', () => {
//     const videoMap = {
//         item1: '/videos/piano1vid.mp4',
//         item2: '/videos/piano2vid.mp4',
//         item3: '/videos/piano3vid.mp4',
//         item4: '/videos/piano4vid.mp4',
//         item5: '/images/stillphoto.jpg' 
//     };

//     const videoContainer = document.querySelector('.video-containers video');
//     const stillPhoto = document.querySelector('.video-containers img');

//     function playVideo(src) {
//         if (src.endsWith('.jpg')) {
//             videoContainer.style.display = 'none';
//             stillPhoto.src = src;
//             stillPhoto.style.display = 'block';
//         } else {
//             stillPhoto.style.display = 'none';
//             videoContainer.src = src;
//             videoContainer.style.display = 'block';
//             videoContainer.play();
//         }
//     }

//     // Autoplay video for item1 on page load
//     playVideo(videoMap['item1']);

//     document.querySelectorAll('.selection-item').forEach(item => {
//         item.addEventListener('click', () => {
//             const videoSrc = videoMap[item.id];

//             playVideo(videoSrc);

//             // Change overflow property of the respective paragraph and handle spacing
//             document.querySelectorAll('.selection-text-container-paragraph').forEach(paragraph => {
//                 paragraph.classList.remove('visible');
//             });

//             const paragraph = item.querySelector('.selection-text-container-paragraph');
//             paragraph.classList.add('visible');
//         });
//     });

//     // Ensure video plays correctly when loaded
//     videoContainer.addEventListener('loadeddata', () => {
//         videoContainer.play();
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
    const stillPhoto = document.getElementById('mainImage'); 

    function playVideo(src) {
        if (src.endsWith('.jpg')) {
            videoContainer.style.display = 'none';
            stillPhoto.src = src;
            stillPhoto.style.display = 'block';
        } else {
            stillPhoto.style.display = 'none';
            videoContainer.src = src;
            videoContainer.style.display = 'block';
            videoContainer.play();
        }
    }

   
    playVideo(videoMap['item1']);

    document.querySelectorAll('.selection-item').forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = videoMap[item.id];

            playVideo(videoSrc);

            
            document.querySelectorAll('.selection-text-container-paragraph').forEach(paragraph => {
                paragraph.classList.remove('visible');
            });

            const paragraph = item.querySelector('.selection-text-container-paragraph');
            paragraph.classList.add('visible');
        });
    });

  
    videoContainer.addEventListener('loadeddata', () => {
        videoContainer.play();
    });
});
