document.addEventListener('DOMContentLoaded', function () {

    let currentSong = null;
    let currentVoice = null;
    let narrator = null;
    let currentAudio = null;
    let  currentAudioDescrption = null;
    let currentVideo = null;
    let currentReader = null;
    let currentIntroMaker = null;
    let currentquotemaker = null;
    let  currentNotice = null;
    let  currentIntroElement = null;
    let  currentQuoteMakerElement = null;
    let currentStory = null;
    let narratorAudio = null; // Declare the audio variable outside the loop
    let currentThemeSong = null;
    let currentRecommendedSong = null;
    let currentSongAudio = null;
    let currentPlayingButton = null; // To track the button currently controlling the audio
    let currentProgressBar = null; // To track the progress bar for the current audio



    

    const song = 'theme.mp3';
    const song2 = 'audio2.mp3';
    const song3 = 'audio.mp3';
    const song4 = 'love.mp3';
    const song5 = 'slide.mp3';
    const song6 = 'slide2.mp3';
    const song7 = 'thanks.mp3';
    const song8 = 'dream.mp3';
    const song9 = 'read.mp3';
    const song10 = 'read2.mp3';
    const song11 = 'read3.mp3';
    const song12 = 'read4.mp3';
    const song13 = 'read5.mp3';
    const song14 = 'motivational.mp3';
    const song15 = 'good life.mp3';
    const song16 = 'show yourself.mp3';
    const song17 = 'trailer.mp3';
    const song18 = 'read6.mp3';
    const song19 = 'intro.mp3';
    const notice1 = 'notice1.mp3';
    const notice2 = 'notice2.mp3';
    const characterSong0 = "character.mp3";
    const characterSong1 = "character1.mp3";


    let isMenu = false;
    let isPlaying = false;
    let isPlayingTrailer = false;
    let playSelected = false;
    let isSongAudioPlaying = false;

    const timeouts = []; // Array to hold timeouts
    let timeoutIds = []; // Store timeout IDs globally
    let userQuote = new Object();
    let shareItem = new Object();


    let timeout;

    document.designMode = 'off';

    setInterval(() => {
        if (document.designMode !== 'off') {
            document.designMode = 'off';
        }
    }, 1000);  // Check every second
    

    const Awesomewords = [
        {startAt: 2, text: "Imajin Haven of Friendship!"},
        {startAt: 3, text: "I paint my friends with hues of love and admiration"},
        {startAt: 7, text: "Each friend is a masterpiece"},
        {startAt: 9, text: "A unique stroke on the canvas of life"},
        {startAt: 15, text: "I celebrate the beautiful tapestry of my friends’ lives."},
        {startAt: 18, text: "Their stories and insights add depth and richness to this artful tapestry."},
         {startAt: 21, text: "As you wander through this gallery of cherished connections,"},
        {startAt: 28, text: "Inspired by vibrant expressions of friendship and the profound beauty within each story."},
        {startAt: 32, text: "Let the colors of camaraderie brighten your day"},
        {startAt: 35, text: "Artful narratives warm your heart"},
        {startAt: 38, text: "Together, we create a symphony of friendship that transcends time"}
    ];
    
    (function() {
        const loadingAudio = new Audio(song19); // Assuming 'song19' is a valid audio URL.
        const currentTime = new Date().getTime(); // Current timestamp
        const lastVisitKey = 'lastVisit';
        const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000; // 3 days
    
        // Check if the user is new or hasn't visited in over 3 days
        const lastVisit = localStorage.getItem(lastVisitKey);
        
        if (!lastVisit || (currentTime - lastVisit) > threeDaysInMilliseconds) {
            // Update the last visit timestamp
            localStorage.setItem(lastVisitKey, currentTime);
    
            // Play the audio
            loadingAudio.play().catch((error) => {
                console.error("Audio failed to play:", error);
                document.querySelector('.loading-animation').style.display = "none"; // Hide if audio fails
            });
    
            // Function to update the loading message
            const updateLoadingMessage = () => {
                const currentTime = Math.floor(loadingAudio.currentTime);
                
                Awesomewords.forEach(word => {
                    if (currentTime === word.startAt) {
                        document.querySelector('.loading-message').textContent = word.text;
                    }
                });
            };
    
            // Listen for time updates in the audio to display Awesomewords text
            loadingAudio.addEventListener('timeupdate', updateLoadingMessage);
    
            // Hide the loading animation and message once the audio ends
            loadingAudio.addEventListener('ended', () => {
                document.querySelector('.loading-animation').style.display = "none";
            });
        }
        else{

            document.querySelector('.loading-animation').style.display = "none";
        }
    })();
  
    

    function pauseMedia(media) {
        if (media && typeof media.pause === 'function') {
            media.pause();
        }
    }



    const images = [
        {imgsrc:"logo.jpg", start:0, end: 7, names:"Friends of imajin"}, 
        {imgsrc:"liz.jpg", start:8, end: 16, names:"Bruz Liz"}, 
        {imgsrc:"lily.jpg", start:17, end: 24, names:"bruz Lily"}, 
        {imgsrc:"mss.jpg", start:25, end: 32, names:"Mi$$ Bad Mind"}, 
        {imgsrc:"gyala.jpg", start:33, end: 41, names:"Gyala Barbie"}, 
        {imgsrc:"dorian.jpg", start:42, end: 50, names:"Dorian Gray"}, 
        {imgsrc:"mickey.jpg", start:51, end: 58, names: "Mickey"}, 
        {imgsrc:"ben.jpg", start:59, end: 66, names:"111 Doctor B"}, 
        {imgsrc:"maargie.jpg", start:67, end: 76, names:"Princess Margie"}, 
        {imgsrc:"kinara.jpg", start:77, end: 83, names:"Kinara Fao"}, 
        {imgsrc:"fay.jpg", start:84, end: 98, names:"Pretty Fay"}, 
        {imgsrc:"amaya.jpg", start:99, end: 107, names:"Amaya Salvada"}, 
        {imgsrc:"tabeh.jpg", start:108, end: 116, names:"tabeh tron"}, 
        {imgsrc:"lilpretty.jpg", start:117, end: 124, names:"lilpretty nigga"}, 
        {imgsrc:"mishy.jpg", start:125, end: 133, names:"quinnshitt mishy"},
        {imgsrc:"bexy.jpg", start:134, end:139, names:"Bexy Dexy"},
        {imgsrc:"milly.jpg", start:140, end: 148, names:"milly mungats"}, 
        {imgsrc:"uphreasia.jpg", start:149, end: 157, names:"uphreasia migose"}, 
        {imgsrc: "naya.jpg", start:158, end: 166, names:"Naya Milae"},
        {imgsrc:"misting.jpg", start:167, end:175, names: "misting Enable Mreggae"},
        {imgsrc:"vulence.jpg", start:176, end: 178, names:"vulence  dali"},
    ]
    
    // Select the play icon (first <li> element)
    const listIcon = document.querySelectorAll('.right-header ul li')[0];
    const musicIcon = document.querySelectorAll('.right-header ul li')[1];
    const heartIcon = document.querySelectorAll('.right-header ul li')[2];
    const quotemakerIcon = document.querySelectorAll('.right-header ul li')[3];
    const postFeedIcon =  document.querySelectorAll('.right-header ul li')[4];


    let currentSlide = 0;
    let currentImageIndex = 0; // Declare outside the function
    let currentLyricsIndex = 0;
    let currentQuoteIndex = 0;
    

    const slides = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');


    function hideSlideBtn(element) {
       element.style.opacity = '0';
       element.style.pointerEvents = 'none'
    }

    function ShowSlideBtn(element) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto'
    }
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            // Remove the 'active' class from all slides
            slide.classList.remove('active');
    
            // Set the transform for the slide based on its index
            if (i === index) {
                slide.style.transform = 'translateX(0)';
                slide.classList.add('active');  // Add the 'active' class to the current slide
                slide.scrollIntoView({behavior: "smooth", block: "center"});
            } else if (i < index) {
                slide.style.transform = 'translateX(-100%)';
            } else {
                slide.style.transform = 'translateX(100%)';
            }
        });
    }
    
    // Event listener for the previous button
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
       playCurrentVideo(true);
    });
    
    // Event listener for the next button
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
        playCurrentVideo(true);
    });
    
    // Initialize the first slide
    showSlide(currentSlide);
    

    document.querySelector('.left-header').onclick = () => {
        document.querySelector('.about-imajin').classList.remove('visible');
        document.querySelector('.welcome-div').classList.remove('hidden');
        document.querySelector('.friends-section').style.display= 'none';
    }

   const  hideAllIcons = () => {
        const allHeaderIcons = document.querySelectorAll('.right-header ul li');
        allHeaderIcons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.pointerEvents =  'none';
        });
   }

    hideAllIcons();

   const  showAllIcons = () => {
        const allHeaderIcons = document.querySelectorAll('.right-header ul li');
        allHeaderIcons.forEach(icon => {
            icon.style.opacity = '1';
            icon.style.pointerEvents =  'auto';
        });
    }


    // Add event listener for the music icon click
    musicIcon.addEventListener('click', () => {
        isMenu = !isMenu; // Toggle the state of the menu
        document.querySelector('.song-menu').classList.toggle('active', isMenu); // Toggle the active class
    });

    // Add event listener for document click
    document.addEventListener('click', (event) => {
        const songMenu = document.querySelector('.song-menu');
        
        // Check if the click is outside the song menu and if the menu is active
        if (!songMenu.contains(event.target) && isMenu) {
            isMenu = false; // Set the menu state to inactive
            songMenu.classList.remove('active'); // Remove the active class
        }
    }, true); // Use capture phase to ensure this runs before other click events

    


    const proceedBtn = document.querySelectorAll('.controls button')[0];
    const playVideo = document.querySelectorAll('.controls button')[1];
    const motivbtn = document.querySelectorAll('.controls button')[2];
    const aboutBtn = document.querySelectorAll('.controls button')[3];



    let audiosrc = null; // Keep audiosrc outside the function to persist the value across calls

    function playCurrentAudio(song) {
        // Check if the song is different from the current one playing
        if (audiosrc !== song) {
            audiosrc = song; // Update audiosrc to the new song
            currentAudio = new Audio(song); // Create a new Audio object for the new song
            currentAudio.play(); // Play the new song
            isPlayingTrailer = true;
        } else {
            // If the same song is playing, toggle between play and pause
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause(); // Pause the current audio
                isPlayingTrailer = false;
            } else if (currentAudio) {
                currentAudio.play(); // Resume the current audio
                isPlayingTrailer = true;
            }
        }

        // Update the progress bar as the audio plays
        currentAudio.addEventListener('timeupdate', () => {
            const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
            document.querySelector('.progress-bar').style.width = `${percent}%`;
        });
    }

   
    function playCurrentVideo(state) {
        const carouselItems = document.querySelectorAll('.carousel-item video');
        currentVideo = carouselItems[currentSlide];
        const overlay = document.querySelectorAll('.carousel-item .video-overlay')[currentSlide];
    
        // Pause all videos before playing the current one
        document.querySelectorAll('.video-intro video').forEach(vid => vid.pause());
        document.querySelectorAll('video-overlay video').forEach(vid =>{
            vid.addEventListener('contextmenu', (e) => { // Corrected event name
                e.preventDefault();
                overlay.classList.add('active');
                hideSlideBtn(prevBtn);
                hideSlideBtn(nextBtn);
            });

            vid.addEventListener('stalled', () => {
                overlay.classList.add('active');
                hideSlideBtn(prevBtn);
                hideSlideBtn(nextBtn);
            });
        });
        
    
        // Add event listeners to manage the loading overlay and play/pause logic
        currentVideo.addEventListener('loadstart', () => {
            overlay.classList.add('active');
            hideSlideBtn(prevBtn);
            hideSlideBtn(nextBtn);
        });
    
        currentVideo.addEventListener('stalled', () => {
            overlay.classList.add('active');
            hideSlideBtn(prevBtn);
            hideSlideBtn(nextBtn);
        });
    
        currentVideo.addEventListener('contextmenu', (e) => { // Corrected event name
            e.preventDefault();
            overlay.classList.add('active');
            hideSlideBtn(prevBtn);
            hideSlideBtn(nextBtn);
        });
    
        currentVideo.addEventListener('canplay', () => {
            overlay.classList.remove('active');
            ShowSlideBtn(prevBtn);
            ShowSlideBtn(nextBtn);
        });
    
        currentVideo.addEventListener('playing', () => {
            overlay.classList.remove('active');
            hideSlideBtn(prevBtn);
            hideSlideBtn(nextBtn);
            playVideo.innerHTML = '<span><i class="fas fa-pause"></i>Pause</span>';
            isPlaying = true;
        });
    
        currentVideo.addEventListener('pause', () => {
            playVideo.innerHTML = '<span><i class="fas fa-play"></i>Play</span>';
            ShowSlideBtn(prevBtn);
            ShowSlideBtn(nextBtn);
            isPlaying = false;
        });
    
        currentVideo.addEventListener('ended', () => {
            overlay.classList.remove('active');
            ShowSlideBtn(prevBtn);
            ShowSlideBtn(nextBtn);
            playVideo.innerHTML = '<span><i class="fas fa-play"></i> Video</span>';
            isPlaying = false;
        });
    
         // Control video based on state argument (play or pause)
        if (state) {
            currentVideo.play();
            currentVideo.scrollIntoView({ behavior: "smooth", block: "center" });
            isPlaying = true;
        } else {
            currentVideo.pause();
            isPlaying = false;
        }

    
        // Time update for the progress bar
        currentVideo.addEventListener('timeupdate', () => {
            if (!isFinite(currentVideo.duration) || isNaN(currentVideo.duration) || currentVideo.duration === 0) {
                currentVideo.pause();
                currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel-item').length; // Go to next slide
                showSlide(currentSlide);
                playCurrentVideo(); // Start playing the next video
                return; // Skip updating if duration is invalid
            }
    
            const percent = (currentVideo.currentTime / currentVideo.duration) * 100;
            document.querySelectorAll('.carousel-item .video-intro .progress-video-bar')[currentSlide].style.width = `${percent}%`;
        });
    }
    
    
    // Play/pause button handler
    playVideo.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playCurrentVideo(isPlaying);
    });
    
    
    document.querySelector('.download-video').onclick = function () {
        const  link = document.createElement('a');
        link.href = currentVideo.src;
        link.download = "Imajin_video.mp4";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }
    

    aboutBtn.addEventListener('click', () => {
        document.querySelector('.about-imajin').classList.add('visible');
        document.querySelector('.welcome-div').classList.add('hidden');

        closeQuoteRader();
    });

    motivbtn.addEventListener('click', () => {
        document.querySelector('.motivational-overlay').classList.add('active');
        narrator = new Audio(song14);
        narrator.play();
        document.querySelector('.video-intro').style.opacity = '0';
        showMotivationalSpeech();

        narrator.addEventListener('ended', () => {
            document.querySelector('.motivational-overlay').classList.remove('active');

            if(narrator) {
                narrator.pause();
                narrator.currenTime = 0;
    
            }
            document.querySelectorAll('.motivational-content p').forEach(t => {t.classList.remove('active')});

            document.querySelector('.video-intro').style.opacity = '1';
        });

        closeQuoteRader();

        if(currentVideo) {
            currentVideo.pause();
            isPlaying = true;
        }
    });

    const showMotivationalSpeech = () => {
        const allText = document.querySelectorAll('.motivational-content p');
        let accumulated = 0;
    
        // Remove active class from all paragraphs initially
        allText.forEach(t => t.classList.remove('active'));
    
        // Clear any previous timeouts in case this function was called again
        timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        timeoutIds = []; // Reset the timeout ID array
    
        // Set up the timing for each paragraph
        allText.forEach(p => {
            const duration = parseInt(p.getAttribute('data-time'));
    
            const addActiveTimeout = setTimeout(() => {
                p.classList.add('active');
                p.scrollIntoView({behavior: "smooth", block:"center"});
    
                // Remove the active class after the duration
                const removeActiveTimeout = setTimeout(() => {
                    p.classList.remove('active');
                }, duration * 1000);
    
                // Store the removal timeout
                timeoutIds.push(removeActiveTimeout);
            }, accumulated * 1000);
    
            // Store the timeout for adding the active class
            timeoutIds.push(addActiveTimeout);
    
            accumulated += duration; // Update accumulated time for the next paragraph
        });
    };

    document.querySelector('.close-motivational').addEventListener('click', () => {
        document.querySelector('.motivational-overlay').classList.remove('active');

        if(narrator) {
            narrator.pause();
            narrator.currenTime = 0;

        }
        document.querySelectorAll('.motivational-content p').forEach(t => {t.classList.remove('active')});

        document.querySelector('.video-intro').style.opacity = '1';
    });

    proceedBtn.addEventListener('click', () => {
        showAllIcons();
        playTrailer();
        closeQuoteRader();
    })

    const backBtn = document.querySelector('.back-home button');
    const dreamBtn = document.querySelectorAll('.vote-gratitude ul li button')[0];
    const linkBtn = document.querySelectorAll('.vote-gratitude ul li button')[1];
    const thankBtn = document.querySelectorAll('.vote-gratitude ul li button')[2];
    const moreBtn = document.querySelectorAll('.vote-gratitude ul li button')[3];

    const overlayContainer = document.querySelector('.big-thanks');


    backBtn.addEventListener('click', () => {
        document.querySelector('.about-imajin').classList.remove('visible');
        document.querySelector('.welcome-div').classList.remove('hidden');


        closeQuoteRader();

        pauseMedia(currentSong);
        pauseMedia(currentVoice);
        pauseMedia(narrator);
    });

    

    const playTrailer = () => {
        const trailerOverlay = document.querySelector('.trailer-overlay');
        trailerOverlay.style.display = 'flex'; // Show trailer overlay
        
        // Play the audio by passing 'play' as the state
        playCurrentAudio(song17);
       
        currentAudio.addEventListener('timeupdate', () => {
            slidesimages();
        });

        // Handle when the audio ends
        currentAudio.addEventListener('ended', closeTrailer);
    
        // Update the play control button icon based on the audio state
        if (isPlayingTrailer) {
            document.querySelector('.play-control').innerHTML = '<span><i class="fas fa-pause"></i></span>';
        } else {
            document.querySelector('.play-control').innerHTML = '<span><i class="fas fa-play"></i></span>';
        }

        if(currentVideo) {
            currentVideo.pause();
        }

        if(currentSong) {
            currentSong.pause();
        }       
    };

    /* setTimeout(function () {
        playTrailer();
    },4000); */
    
    // Play/pause button handler
    document.querySelector('.play-control').onclick = function () {
        // Toggle play/pause state and icon based on current audio state
        if (isPlayingTrailer) {
            this.innerHTML = '<span><i class="fas fa-play"></i></span>';
            playCurrentAudio(song17); // Pause the audio
        } else {
            this.innerHTML = '<span><i class="fas fa-pause"></i></span>';
            playCurrentAudio(song17); // Play the audio
        }
    };
    
   
    document.querySelector('.trailer-close').onclick = () => {
       closeTrailer();
    };
    
    function closeTrailer () {
        const numberDisplay = document.querySelector('.number');
        const preview = document.querySelector('.trailer-preview');
        const namedisplay = document.querySelector('.names-display');

        document.querySelector('.trailer-overlay').style.display = 'none';
            
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset the audio to the beginning
            isPlayingTrailer = false;
        }

        currentImageIndex = 0;

        namedisplay.innerHTML = '<h2>Friends of Imajin</h2>';
        preview.style.backgroundImage = 'url("logo.jpg")';
        numberDisplay.innerHTML = '';
    }

    function slidesimages() {
        const numberDisplay = document.querySelector('.number');
        const preview = document.querySelector('.trailer-preview');
        const namedisplay = document.querySelector('.names-display');
        const songDuration = currentAudio.duration; // Total duration of the audio
        const totalImages = images.length; // Total number of images
        const durationPerImage = songDuration / totalImages; // Duration each image should be displayed
    
        // Calculate the current image index based on the current time
        currentImageIndex = Math.floor(currentAudio.currentTime / durationPerImage);
    
        // Ensure currentImageIndex is within bounds
        if (currentImageIndex >= totalImages) {
            currentImageIndex = totalImages - 1;
        } else if (currentImageIndex < 0) {
            currentImageIndex = 0;
        }
    
        const currentImage = images[currentImageIndex];
        const currentName = currentImage.names;
        const currentPhoto = currentImage.imgsrc;
    
        // Update the display
        numberDisplay.innerHTML = `<h2>${currentImageIndex < 1 ? '': currentImageIndex}</h2>`;
        preview.style.backgroundImage = `url(${currentPhoto})`;
        namedisplay.innerHTML = `<h2>${currentName}</h2>`;
    
        // Listen for seek events to update images accordingly
        currentAudio.addEventListener('seeked', slidesimages);
    }
    
    // Handle click events on the progress bar
    document.querySelector('.progress-truck').onclick = function (e) {
        const width = this.clientWidth;
        const clicked = e.offsetX;
        const duration = currentAudio.duration;
        currentAudio.currentTime = (clicked / width) * duration;
        slidesimages();
    }
    


   // Assigning event listeners to the buttons
    const alexVoice = document.querySelectorAll('.voice-overs button')[0];
    const anastasiaVoice = document.querySelectorAll('.voice-overs button')[1];
    const collinsVoice = document.querySelectorAll('.voice-overs button')[2];
    const vivianVoice = document.querySelectorAll('.voice-overs button')[4];
    const hawavoice = document.querySelectorAll('.voice-overs button')[3];

    const allbuttons= document.querySelectorAll('.voice-overs button');
    const allPs = document.querySelectorAll('.description p');
    const allTexts = Array.from(allPs).map(p => p.textContent);  // Store original text

    alexVoice.onclick = () => { readAloud(song11, alexVoice); };
    anastasiaVoice.onclick = () => { readAloud(song9, anastasiaVoice); };
    collinsVoice.onclick = () => { readAloud(song12, collinsVoice); };
    vivianVoice.onclick = () => { readAloud(song10, vivianVoice); };
    hawavoice.onclick = () => { readAloud(song13, hawavoice); };
    
    
    function readAloud(voices, element) {
    
        allPs.forEach(p => {p.classList.remove('active')});
        if( currentVoice && currentVoice !== voices){
            currentVoice.pause();
        }

        currentVoice = new Audio(voices);
        currentVoice.play();

         // Clear any existing timeouts
        timeouts.forEach(timeout => clearTimeout(timeout));
        timeouts.length = 0; // Reset the timeouts array

        showActiveP();

       

        allbuttons.forEach(btn => {
            if(element === btn) {
                btn.classList.add('active');
            }

            else{
                btn.classList.remove('active');
            }
        });

        currentVoice.addEventListener('ended', () => {
            allbuttons.forEach(btn => {btn.classList.remove('active')});
        });

        if (element === hawavoice) {
            translateText();
        } else {
            revertText();
        }

            closeQuoteRader();
            pauseMedia(currentVideo);
            pauseMedia(currentSong);
            pauseMedia(narrator);
    }

    function showActiveP() {
        let accumulatedTime = 0;

        allPs.forEach((p) => {
            const duration = parseInt(p.getAttribute('data-time'));

            const timeoutId = setTimeout(() => {
                p.classList.add('active');
                p.scrollIntoView({behavior: "smooth", block: "center"})

                // Remove class after 'duration' time
                const removeTimeoutId = setTimeout(() => {
                    p.classList.remove('active');
                }, duration * 1000);

                timeouts.push(removeTimeoutId); // Store the timeout for removing the active class
            }, accumulatedTime * 1000); // Add 'active' class after accumulated time

            timeouts.push(timeoutId); // Store the timeout for adding the active class

            accumulatedTime += duration; // Update accumulated time for the next paragraph
        });
    }
    
    function translateText() {
        const allPs = document.querySelectorAll('.description p');

        allPs.forEach(text => {
            const swahiliText = text.getAttribute('data-swahili');
            text.textContent = swahiliText;
        })
    }
    
    // Revert the text content of paragraphs to the original text
    function revertText() {
        allPs.forEach((p, index) => {
            p.textContent = allTexts[index];  // Set text content back to original
        });
    }

    function playAboutSong(song, start, end, callback) {

        if(currentSong && currentSong !== song) {
            currentSong.pause();
        }
        
        if (currentVoice) {
            currentVoice.pause();
            timeouts.forEach(timeout => clearTimeout(timeout));
            timeouts.length = 0; // Reset the timeouts array
            allPs.forEach(a => {a.classList.remove('active')});
            allbuttons.forEach(f => {f.classList.remove('active')});
        }

        currentSong = new Audio(song);
    
        currentSong.currentTime = start;
        currentSong.play();
    
        currentSong.addEventListener('timeupdate', () => {
            if (currentSong.currentTime >= end) {
                currentSong.pause();
                currentSong.currentTime = 0;
    
                if (callback) {
                    callback();  // Call the callback when the song ends
                }
            }
        });
    }

    dreamBtn.addEventListener('click', () => {
    
        playAboutSong(song8, 139, 165, () =>{
            document.querySelector('.dream-lyrics-overly').style.display = 'none';
            const dreamContent = document.querySelector('.dream-content');
            dreamContent.innerHTML = '';
        });
        showDreamLyrics();
        closeQuoteRader();
    });

    thankBtn.addEventListener('click', () => {
        playAboutSong(song7, 43, 57, () => {
            overlayContainer.style.display = 'none';
            overlayContainer.innerHTML = '';
            document.querySelector('.show-yourself').style.display = 'none';
            
        });

    
        createLoveEmoji("love");  // Show the overlay and emojis when the song starts

        closeQuoteRader();
       
    });

    function createLoveEmoji(element) {
        // Clear previous love-div elements
       
        overlayContainer.style.display = 'flex'; // Display the overlay container
        
        if (element === "love") {
            overlayContainer.innerHTML = '<div class="thank-content"><h2>You\'re Welcome</h2></div>';

            for (let i = 0; i < 50; i++) {
              
                const loveDiv = document.createElement('div');
                loveDiv.classList.add('love-div'); // Add common class to all love divs
        
                loveDiv.innerHTML = '<span><i class="fas fa-heart"></i></span>';
                loveDiv.classList.add('jello');
            
                // Randomize position within the container
                loveDiv.style.left = `${Math.random() * 100}%`;
                loveDiv.style.top = `${Math.random() * 100}%`;
        
                // Append the heart or icon to the container
                overlayContainer.appendChild(loveDiv);
        
                // Set up an interval to remove and then re-add each heart
                setInterval(function () {
                    // Remove the heart after 2 seconds
                    overlayContainer.removeChild(loveDiv);
        
                    // Re-add the heart after a 500ms delay
                    setTimeout(function() {
                        overlayContainer.appendChild(loveDiv);
                    }, 500);
        
                }, 2500); // 2 seconds for removal, then 500ms delay for re-add (total 2.5 seconds)
            }
        }

        if (element === "icognito") {
            const loveDiv = document.createElement('div');
            loveDiv.classList.add('love-div'); // Add common class to all love divs
            loveDiv.innerHTML = '<span><i class="fas fa-user-secret"></i></span>';
            loveDiv.classList.add('icognito');

            // Append the heart or icon to the container
            overlayContainer.appendChild(loveDiv);
        }
    }
    
    
    function showDreamLyrics() {
        document.querySelector('.dream-lyrics-overly').style.display = 'flex';
        const dreamContent = document.querySelector('.dream-content');
    
        const lyrics = [
            { text: 'I\'ve got a dream! (She\'s got a dream!)', begin: 139, stop: 140 },
            { text: 'I\'ve got a dream! (She\'s got a dream!)', begin: 141, stop: 142 },
            { text: 'I just wanna see the floating lanterns gleam!', begin: 143, stop: 145 },
            { text: 'And with every passing hour', begin: 146, stop: 147 },
            { text: 'I\'m so glad I left my tower', begin: 148, stop: 149 },
            { text: 'Like all you lovely folks I\'ve got a dream!', begin: 150, stop: 152 },
            { text: 'She\'s got a dream! (She\'s got a dream!)', begin: 153, stop: 154 },
            { text: 'They\'ve got a dream! (We\'ve got a dream!)', begin: 155, stop: 156 },
            { text: 'So our differences ain\'t really that extreme!', begin: 157, stop: 159 },
            { text: 'We\'re one big team!', begin: 160, stop: 165 }
        ];
    
        let currentIndex = 0;
    
        currentSong.addEventListener('timeupdate', () => {
            const currentTime = currentSong.currentTime;
            const currentLyrics = lyrics[currentIndex];
    
            if (currentLyrics && currentTime >= currentLyrics.begin && currentTime <= currentLyrics.stop) {
                const className = currentIndex % 2 === 0 ? 'even' : 'odd';

                // Set inner HTML with the assigned class for styling
                dreamContent.innerHTML = `<p class="${className}">${currentLyrics.text}</p>`;
                dreamContent.style.backgroundImage = 'none';
            }
    
            if (currentLyrics && currentTime > currentLyrics.stop) {
                currentIndex++;
            }
    
            // Stop updating when all lyrics have been displayed
            if (currentIndex >= lyrics.length) {
                currentSong.removeEventListener('timeupdate', this);
            }
        });
    }
    

    document.querySelector('.dream-close').addEventListener('click', () => {
        document.querySelector('.dream-lyrics-overly').style.display = 'none';
        const dreamContent = document.querySelector('.dream-content');
        dreamContent.innerHTML = '';
        currentSong.pause();
        currentSong.currenTime = 0;
    });

    linkBtn.addEventListener('click', () => {
        playAboutSong(song15, 89, 102, () => {
            document.querySelector('.dream-lyrics-overly').style.display = 'none';
            const dreamContent = document.querySelector('.dream-content');
            dreamContent.innerHTML = '';
            window.open("https://www.facebook.com/mimisi.dameyako", "_blank")
        });
        showGoodLife();
        closeQuoteRader();
    });

    function  showGoodLife() {
        document.querySelector('.dream-lyrics-overly').style.display = 'flex';
        const dreamContent = document.querySelector('.dream-content');
    
        const lyrics = [
            { text: 'We put the good in the good in the good life', begin: 90, stop: 92 },
            { text: 'We put the good in the good in the good life', begin: 93, stop: 95 },
            { text: 'We put the bad in the past, now we alright', begin: 96, stop: 99 },
            { text: 'We alright Ayy, ayy, ayy, ayy', begin: 100, stop: 102 },

        ];
    
        let currentIndex = 0;
    
        currentSong.addEventListener('timeupdate', () => {
            const currentTime = currentSong.currentTime;
            const currentLyrics = lyrics[currentIndex];
    
            if (currentLyrics && currentTime >= currentLyrics.begin && currentTime <= currentLyrics.stop) {
                const className = currentIndex % 2 === 0 ? 'even' : 'odd';

                // Set inner HTML with the assigned class for styling
                dreamContent.innerHTML = `<p class="${className}">${currentLyrics.text}</p>`;
                dreamContent.style.backgroundImage = 'none';
            }
    
            if (currentLyrics && currentTime > currentLyrics.stop) {
                currentIndex++;
            }
    
            // Stop updating when all lyrics have been displayed
            if (currentIndex >= lyrics.length) {
                currentSong.removeEventListener('timeupdate', this);
            }
        });
    }

    heartIcon.addEventListener('click', () => {
        playAboutSong(song4, 45, 86, () => {
            document.querySelector('.dream-lyrics-overly').style.display = 'none';
            const dreamContent = document.querySelector('.dream-content');
            dreamContent.innerHTML = '';
        });
        showLoveLyrics();
        closeQuoteRader();
    });

    const  showLoveLyrics = () => {
        document.querySelector('.dream-lyrics-overly').style.display = 'flex';
        const dreamContent = document.querySelector('.dream-content');

        dreamContent.innerHTML = '<p>I need Somebody to love</p> <p><span><i class="fas fa-heart"></i></span><span><i class="fas fa-heart"></i></span><span><i class="fas fa-heart"></i></p>';
        dreamContent.style.backgroundImage = 'url("love.jpg")';
    }

    listIcon.addEventListener("click", () =>{
        document.querySelector('.about-imajin').classList.remove('visible');
        document.querySelector('.welcome-div').classList.add('hidden');
        document.querySelector('.friends-section').style.display= 'flex';
    })

    moreBtn.addEventListener('click', () => {
        playAboutSong(song16, 0, 60, () => {
            document.querySelector('.show-yourself').style.display = 'none';
            overlayContainer.style.display = 'none';
            overlayContainer.innerHTML = '';
            
        });

        showcontentOverlay();

        createLoveEmoji("icognito");

        showLyricsShowyourself();
    });

    const showcontentOverlay = () => {
        
        document.querySelector('.show-yourself').style.display = 'flex';
        overlayContainer.style.display = 'none';
        overlayContainer.innerHTML = '';
        closeQuoteRader();
    }

    function showLyricsShowyourself() {
        const lyrics = [
            { text: 'Show yourself', start: 0, end: 2 },
            { text: "I'm no longer trembling", start: 3, end: 5 },
            { text: "Here I am", start: 6, end: 8 },
            { text: "I've come so far", start: 9, end: 11 },
            { text: "You are the answer I've waited for", start: 12, end: 14 },
            { text: "All of my life", start: 15, end: 17 },
            { text: "Oh, show yourself", start: 18, end: 20 },
            { text: "Let me see who you are", start: 21, end: 26 },
            { text: "Come to me now", start: 27, end: 30 },
            { text: "Open your door", start: 31, end: 33 },
            { text: "Don't make me wait", start: 34, end: 37 },
            { text: "One moment more", start: 38, end: 41 },
            { text: "Oh, come to me now", start: 42, end: 46 },
            { text: "Open your door", start: 47, end: 49 },
            { text: "Don't make me wait", start: 50, end: 53 },
            { text: "One moment more", start: 54, end: 59 },
        ];
    
        const lyricsDiv = document.createElement('div');
        lyricsDiv.classList.add('lyrics-self');
        overlayContainer.appendChild(lyricsDiv);
    
        let currentIndex = 0;
        let lastDisplayedLyric = null; // Track the last displayed lyric
    
        currentSong.addEventListener('timeupdate', () => {
            const currentTime = currentSong.currentTime;
            const currentLyrics = lyrics[currentIndex];
    
            // Check if the current lyric should be displayed
            if (currentLyrics && currentTime >= currentLyrics.start && currentTime <= currentLyrics.end) {
                // Only display if it's different from the last displayed lyric
                if (lastDisplayedLyric !== currentLyrics.text) {
                    // Create a new paragraph element and add the anim class
                    const p = document.createElement('p');
                    p.classList.add('anim'); // Add the anim class for animation
                    p.textContent = currentLyrics.text; // Set the text content
    
                    // Clear previous text and append the new paragraph
                    lyricsDiv.innerHTML = ''; // Clear previous lyrics
                    lyricsDiv.appendChild(p); // Append new paragraph
    
                    // Remove the anim class after the animation duration
                    setTimeout(() => {
                        p.classList.remove('anim'); // Remove anim class after animation
                    }, 2000); // Match this duration to your CSS animation duration
    
                    lastDisplayedLyric = currentLyrics.text; // Update the last displayed lyric
                }
            }
    
            // Move to the next lyric if the current time exceeds the end time
            if (currentTime > currentLyrics.end) {
                currentIndex++;
                lastDisplayedLyric = null; // Reset for the next lyric
            }
        });
    }

    
    
    function displayGoodbyemessage() {
        const goodbyeOverlay = document.querySelector('.good-bye-overlay');
        const goodbyeVideo = document.querySelector('.good-bye-video video');
        
        // Check if the goodbye overlay is already displayed
        if (goodbyeOverlay.style.display === 'flex') {
            // If it is already displayed, do not play the video
            return;
        }
        
        // Otherwise, set the overlay to display flex
        goodbyeOverlay.style.display = 'flex';
        
        // Set the button text
        document.querySelector('.good-bye-video button').innerHTML = '<i class="fas fa-home"></i> Stay';
        
        // Play the goodbye video
        goodbyeVideo.play();
    }
    

   /* let wasHidden = false; // Track if the tab was hidden

     document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            wasHidden = true; // Set to true when the tab is hidden
            if(currentAudio) {
                currentAudio.pause();
                document.querySelector('.play-control').innerHTML = '<span><i class="fas fa-play"></i></span>';
                isPlayingTrailer = false;
            }

            displayGoodbyemessage(); // Show your goodbye overlay
            closeQuoteRader();
            pauseMedia(currentVideo);
            pauseMedia(currentSong);
            pauseMedia(currentVoice);
            pauseMedia(narrator);
            pauseMedia(currentReader);
            pauseMedia(currentAudioDescrption);
            
        }else {
            wasHidden = false; // Reset when the tab becomes visible again
        }
    });  */



    document.querySelector('.good-bye-video button').onclick = function () {
        document.querySelector('.good-bye-overlay').style.display = 'none';
        document.querySelector('.good-bye-message').style.display = 'none';
    }

    document.querySelector('.good-bye-audio').onclick = function () {
        document.querySelector('.good-bye-message').style.display = 'flex';
        document.querySelector('.good-bye-video button').style.display = 'none';
    
        typewritegoodBye();

        readGoodByeMessage();


        this.querySelector('button').style.display = 'none';

        
    }

    const readGoodByeMessage = ()  => {
        const readAudio = new Audio(song18);
        readAudio.play();

        readAudio.addEventListener('ended', () => {
            window.close();
            document.querySelector('.good-bye-message').style.display = 'none';
        });
    }

   
   
    function typewritegoodBye() {
        const text = "As we part ways for now, I, Imajin, wish to leave you with a heart full of warmth and gratitude. Our journey together, though brief, has been filled with wonder and connection. You are always welcome in the space we’ve created together.  Whenever you find yourself longing for a moment of inspiration or a touch of creativity, know that my virtual door is always open. Visit this place, for I will be waiting, a place where love lingers and memories live. I will cherish the moments we shared until time, in its infinite grace, finds a way to bring us together once more.  I will hold our memories close. With enduring love, Imajin.";
        const textArea = document.querySelector('.good-bye-message');
        const paragraphs = text.split('\n\n');  // Split the text into paragraphs
        const speed = 50;
        let currentParagraph = 0;
        let currentChar = 0;
        let pElement = null;
    
        textArea.innerHTML = '';
    
        function typeWriter() {
            if (currentParagraph < paragraphs.length) {
                if (!pElement) {
                    pElement = document.createElement('p');
                    textArea.appendChild(pElement);
                }
    
                if (currentChar < paragraphs[currentParagraph].length) {
                    pElement.innerHTML += paragraphs[currentParagraph].charAt(currentChar);
                    currentChar++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Move to the next paragraph
                    currentParagraph++;
                    currentChar = 0;
                    pElement = null;  // Reset for the new <p>
                    setTimeout(typeWriter, speed); // Continue to the next paragraph
                }
            }
        }
    
        typeWriter();
    }


    const friendsSection = document.querySelector('.friends-section');
    const friendItems = document.querySelectorAll('.friends-section li');

    // Function to center the closest `li` in the viewport
    function centerFriendOnScroll() {
        let closestFriend = null;
        let closestDistance = Number.POSITIVE_INFINITY;

        friendItems.forEach(friend => {
            const rect = friend.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestFriend = friend;
            }
        });

        if (closestFriend) {
            closestFriend.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    // Add scroll event listener
    friendsSection.addEventListener('scroll', () => {
        setTimeout(centerFriendOnScroll, 100); // Small delay to prevent frequent centering
    });




    (function() {
        friendItems.forEach(friendItem => {
            const friend = friendItem.querySelector('.friend'); // Find the .friend within each li
            const seeMoreBtn = friend.querySelector('fieldset button'); // Get the button
    
            seeMoreBtn.addEventListener('click', () => {
                showmoreAboutFriend(friend);
            });
        });
    })();
    
    const showmoreAboutFriend = (friend) => {
        const imgSrc = friend.querySelector('.friend-image img').src;
        const friendName = friend.querySelector('fieldset legend').textContent.trim();
        const friendDescription = friend.getAttribute('data-description');
        const friendVoice = friend.getAttribute('data-voice');
    
        const friendsOverlay = document.querySelector('.friend-preview-overlay');
        const friendImageArea = document.querySelector('.friend-image');
        const friendNamePreview = document.querySelector('.friend-name');
        const copyBtn = document.querySelectorAll('.friend-button-controls button')[0];
        const playvoice = document.querySelectorAll('.friend-button-controls button')[1];
        const downloadAudioBtn = document.querySelectorAll('.friend-button-controls button')[2];
    
        friendsOverlay.style.display = 'flex';
        
        // Clear existing content
        friendImageArea.innerHTML = '';
        friendNamePreview.innerHTML = '';
    
        // Add new content
        friendImageArea.innerHTML = `<img src='${imgSrc}' alt='${friendName}'>`;
        friendNamePreview.innerHTML = `<h3>${friendName}</h3>`;


        playvoice.onclick = () => {
            const readAudio = new Audio(friendVoice);
            currentAudioDescrption = readAudio;
            playvoiceAndShowDesc(readAudio, friendDescription,friendImageArea, downloadAudioBtn);
        }

        copyBtn.addEventListener('click', function() {
            const text = friendDescription + " - " + friendName;
            navigator.clipboard.writeText(text).then(() => {
                // Update button to indicate success
                copyBtn.innerHTML = '<i class="fas fa-check"></i>Copied';
        
                // Revert button back to original state after a short delay
                setTimeout(function () {
                    copyBtn.innerHTML = '<i class="fas fa-clipboard"></i>Copy text';
                }, 2000); // Adjust the delay as needed
            }).catch(err => {
                // Handle error (e.g., copying to clipboard failed)
                console.error('Failed to copy text: ', err);
        
                // Optionally, provide user feedback on failure
                copyBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>Error';
        
                // Revert button back after delay
                setTimeout(function () {
                    copyBtn.innerHTML = '<i class="fas fa-clipboard"></i>Copy text';
                }, 2000);
            });
        });

        downloadAudioBtn.addEventListener('click', (event) => {
            event.target.disabled = true;
            if (friendVoice) {
                // Update the button text to indicate the start of download
                downloadAudioBtn.innerHTML = '<i class="fas fa-arrow-down"></i>Downloading...';
                
                // Create a temporary download link
                const link = document.createElement('a');
                link.href = friendVoice; // Audio file URL
                link.download = `${friendName}.mp3`; // Name for the downloaded file
                
                // Simulate a delay to show "Downloading..." status before completion
                setTimeout(() => {
                    // Trigger the actual download
                    document.body.appendChild(link);
                    link.click();
                    
                    // Remove the link after the download
                    document.body.removeChild(link);
                    
                    // Update the button text to indicate completion
                    downloadAudioBtn.innerHTML = '<i class="fas fa-check"></i>Downloaded';
                    
                    // Revert button back to original state after a short delay
                    setTimeout(() => {
                        downloadAudioBtn.innerHTML = '<i class="fas fa-arrow-down"></i>Download Audio';
                        event.target.disabled = false;
                    }, 2000); // Adjust the delay as needed (e.g., 2 seconds)
                }, 1000); // Simulate a 1-second delay to show progress
            }
        });
        

        
    }

    function playvoiceAndShowDesc(readAudio, friendDescription, friendImageArea, Btn) {
        const descriptionOverlay = document.createElement('div');
        descriptionOverlay.classList.add('friend-image-overlay');
    
        // Function to add typewriter effect
        function typeWriter(text, element, speed = 50) {
            let i = 0;
    
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed); // Speed of typing
                }
            }
    
            type();
        }
    
        if (friendDescription !== '') {
            const paragraph = document.createElement('p');
            descriptionOverlay.appendChild(paragraph);
            friendImageArea.appendChild(descriptionOverlay);
    
            // Start the audio and typing effect
            currentAudioDescrption.play();
            typeWriter(friendDescription, paragraph); // Trigger the typewriter effect
        }
    
        readAudio.addEventListener('ended', () => {
           setTimeout(() => {
                friendImageArea.removeChild(descriptionOverlay);
                Btn.disabled = false;
           }, 2000);
        });
    }
    
    
    document.querySelector('.friend-close').onclick = function () {
        const friendsOverlay = document.querySelector('.friend-preview-overlay');
        friendsOverlay.style.display = 'none';

        if( currentAudioDescrption) {
            currentAudioDescrption.pause();
        }
    }

    const lyricsMemories = [
        {start: 8, eng: 'How does a moment last forever', end: 12},
        {start: 13, eng: 'How can a story never die', end: 15},
        {start: 16, eng: 'It is love we must hold onto',  end: 20},
        {start: 21, eng: 'Never easy, but we try', end: 25},
        {start: 26, eng: 'Sometimes our happiness is captured', end: 29},
        {start: 30, eng: 'Somehow, our time and place stand still', end: 33},
        {start: 34, eng: 'Love lives on inside our hearts and always will', end: 42},
    
        {start: 43, eng: 'Minutes turn to hours',  end: 47},
        {start: 48, eng: 'Days to years and gone',  end: 52},
        {start: 53, eng: 'But when all else has been forgotten', end: 56},
        {start: 57, eng: 'Still our song lives on', end: 63},
    
        {start: 64, eng: 'Maybe some moments weren\'t so perfect', end: 68},
        {start: 69, eng: 'Maybe some memories not so sweet', end: 72},
        {start: 73, eng: 'But we have to know some bad times or our lives are incomplete', end: 80},
        {start: 81, eng: 'Then when the shadows overtake us', end: 85},
        {start: 86, eng: 'Just when we feel all hope is gone',  end: 89},
        {start: 90, eng: 'We\'ll hear our song and know once more', end: 93},
        {start: 94, eng: 'Our love lives on', end: 99},
    
        {start: 105, eng: 'Ooooo, Ooooo, Oooo', end: 117},
    
        {start: 121, eng: 'How does a moment last forever', end: 124},
        {start: 125, eng: 'How does our happiness endure', end: 128},
        {start: 129, eng: 'Through the darkest of our troubles', end: 132},
        {start: 133, eng: 'Love is beauty, love is pure', end: 136},
        {start: 137, eng: 'Love pays no mind to desolation', end: 140},
        {start: 141, eng: 'It flows like a river to the soul',  end: 144},
        {start: 145, eng: 'Protects, perceives and perseveres',  end: 148},
        {start: 149, eng: 'And makes us whole', end: 153},
    
        {start: 154, eng: 'Minutes turn to hours', end: 157},
        {start: 158, eng: 'Days to years then gone', end: 164},
        {start: 165, eng: 'But when all else has been forgotten', end: 169},
        {start: 170, eng: 'Still our song lives on', end: 177},
    
        {start: 178, eng: 'How does a moment last forever', end: 182},
        {start: 183, eng: 'When our song lives on', end: 194},
        {start:195, eng: "Imajin Memories", end: 222}
    ];

    const themesongBtn = document.querySelectorAll('.song-menu ul li')[0];
    const slideSong1 = document.querySelectorAll('.song-menu ul li')[1];
    const slideSong2 = document.querySelectorAll('.song-menu ul li')[2];
    const slideSong3 = document.querySelectorAll('.song-menu ul li')[3];
    const slideSong4 = document.querySelectorAll('.song-menu ul li')[4];
    const slideSong5 = document.querySelectorAll('.song-menu ul li')[5];

    
    

    function handleSlideClick(song, slideshowTime) {
        document.querySelector('.song-menu').classList.remove('active');
        playCurrentAudio(song);
        isMenu = false;
        showMagicalSlideshow(slideshowTime);
    }
    
    slideSong1.onclick = () => handleSlideClick(song5, 10000);
    slideSong2.onclick = () => handleSlideClick(song6, 2000);
    slideSong3.onclick = () => handleSlideClick(song2, 6000);
    slideSong4.onclick = () => handleSlideClick(song3, 6000);
    slideSong5.onclick = () => handleSlideClick(song15, 4000);
    

    themesongBtn.addEventListener('click', () => {
        document.querySelector('.slideshow-overlay').style.display = 'flex';
        document.querySelector('.song-menu').classList.remove('active');
        isMenu = false;

        showslideshow();
    });

    function showslideshow() {
        const friendNametitle = document.querySelector('.name-title');
        const friendImagPreview = document.querySelector('.image-preview');
        const LyricsArea = document.querySelector('.lyrics-display');
    
        playCurrentAudio(song);
    
        if(currentAudio) {
            currentAudio.addEventListener('timeupdate', () => {
    
                if(currentLyricsIndex < lyricsMemories.length) {
                    const audioCurrentTime = currentAudio.currentTime;
                    const currentLyrics = lyricsMemories[currentLyricsIndex];
    
                    // Check if the current time is within the range of current lyrics
                    if(audioCurrentTime >= currentLyrics.start && audioCurrentTime <= currentLyrics.end) {
                        
                        // Display the current lyric
                        LyricsArea.innerHTML = `<p>${currentLyrics.eng}</p>`;
    
                         // Sync image and name with the current lyric
                        if (currentImageIndex < images.length) {
                            friendNametitle.innerHTML = `<h2>${images[currentImageIndex].names}</h2>`;
                            friendImagPreview.innerHTML = `<img src='${images[currentImageIndex].imgsrc}' alt='${images[currentImageIndex].names}'>`;
                        }
                        
                    } else if (audioCurrentTime > currentLyrics.end) {
                        // Move to the next lyric once the current lyric time has passed
                        currentLyricsIndex++;
                        
                        // Clear the lyrics (optional)
                        LyricsArea.innerHTML = '';

                        // Update image index (loop back to the first image when reaching the end)
                        currentImageIndex = (currentImageIndex + 1) % images.length;
                    }

                    
                }
            });
        }

        currentAudio.addEventListener('ended',() => {
            closeSlideshow();
        });
    }

    function closeSlideshow() {
        document.querySelector('.slideshow-overlay').style.display = 'none';
        if(currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            isPlayingTrailer = false;
        }
    }

    document.querySelector('.slideshow-close').onclick = () => {closeSlideshow()}

    // Extract names into a new list called newAuthors
    const newAuthors = images.map(image => image.names);
    const bgPhotos = images.map(image => image.imgsrc);

    let updateImageInterval;

    function showMagicalSlideshow(timeDesire) {
        // Show the slideshow overlay
        document.querySelector('.magical-slideshow-overlay').style.display = 'flex';
        const imgArea = document.querySelector('.image-slide-view');
        const rtDir = document.querySelector('.right-carousel-slideshow');
        const lfDir = document.querySelector('.left-carousel-slideshow');
        let round = 1; // Track the current round
    
        imgArea.innerHTML = ''; // Clear the image area
    
        function updateImage() {
            // Determine the CSS filter based on the round
            const filter = (round % 2 === 1) ? 'grayscale(100%)' : 'none';
    
            // Display the image with the appropriate filter
            imgArea.innerHTML = `<img src='${images[currentImageIndex].imgsrc}' alt='friend_image' style='filter: ${filter};'>`;
    
            // Display the name with the pulse effect
            const currentName = images[currentImageIndex].names;
            const namePing = document.querySelector('.name-ping');
            namePing.innerText = currentName;
    
            // Trigger the animation
            namePing.style.animation = 'none'; // Reset animation
            setTimeout(() => {
                namePing.style.animation = '';  // Reapply animation
            }, 100);
        }
    
        updateImage(); // Initial display of the first image
    
        // Set an interval to update the image
        updateImageInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            if (currentImageIndex === 0) { // If a new round starts
                round++;
            }
            updateImage();
        }, timeDesire);
    
        // Get the audio duration once metadata is loaded
        currentAudio.onloadedmetadata = () => {
            const duration = currentAudio.duration;
    
            currentAudio.addEventListener('timeupdate', () => {
                // Check if the current time is within the last 10 seconds of the audio
                if (currentAudio.currentTime >= (duration - 10)) {
                    clearInterval(updateImageInterval); // Stop updating images 10 seconds before audio ends
                    currentImageIndex = 0; // Reset image index
                    round = 1; // Reset round
                }
            });
    
            currentAudio.addEventListener('ended', () => {
                closeMagicalSlideshow();
            });
        };
    
        // Attach event listeners for navigation buttons
        rtDir.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            if (currentImageIndex === 0) { // If a new round starts
                round++;
            }
            updateImage();
        });
    
        lfDir.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            if (currentImageIndex === images.length - 1) { // If moving backwards to start a new round
                round++;
            }
            updateImage();
        });
    }
    
    
    function closeMagicalSlideshow() {
        // Hide the slideshow overlay
        document.querySelector('.magical-slideshow-overlay').style.display = 'none';
    
        // Pause and reset the audio
        currentAudio.pause();
        currentAudio.currentTime = 0;
    
        // Clear the image update interval
        clearInterval(updateImageInterval);
    
        // Reset the image index
        currentImageIndex = 0;
    
        // Clear the image area content
        document.querySelector('.image-slide-view').innerHTML = '';
    }
    
    

    document.querySelector('.magical-slideshow-close').onclick = closeMagicalSlideshow;


    const intros = [
        `In the eloquent words of author,`,               // 0
        `In the wisdom of author,`,                        // 1
        `A wise soul named author once said,`,            // 2
        `As author beautifully expressed,`,                // 3
        `In the poetic musings of author, we hear,`,      // 4
        `As the insightful author once declared,`,        // 5
        `In the profound reflections of author, we find,`, // 6
        `A sage by the name of author remarked,`,         // 7
        `Let us consider the words of author that `,           // 8
        `In the heartwarming words of author,`,           // 9
        `As author so eloquently put it`,                // 10
        `In the thoughtful insights of author, we discover`, // 11
        `Echoing the sentiments of author, we say,`,      // 12
        `In the heartfelt expressions of author, we find`, // 13
        `As author wisely observed in their timeless words`, // 14
        `A brilliant mind, author, once mused that,`,          // 15
        `From the heart of author, comes this wisdom:`,    // 16
        `According to the timeless words of author,`,      // 17
        `Echoing the profound thoughts of author,`,        // 18
        `From the enlightened mind of author, we learn`,  // 19
        `In the graceful narrative of author, lies this truth:`, // 20
        `With a touch of grace, author once remarked,`,    // 21
        `As author tenderly articulated,`,                 // 22
        `In the philosophical reflections of author, shines this thought:`, // 23
        `Drawing from the depths of author 's soul, we find that,` , // 24
        `In the symphony of words from author`,               // 25
        `Through the cosmic lens of author, shines this insight:`, // 26
        `From the canvas of author ’s mind, a masterpiece unfolds that`, // 27
        `As the universe whispers through author, we hear,`,  // 28
        `In the timeless dance of thoughts by author, arises this truth:`, // 29
        `In the realm of imagination, author once said,`,   // 30
        `With profound insight, author reminds us that,`,   // 31
        `As the stars align, author expresses,`,           // 32
        `In the gentle wisdom of author, we learn,`,       // 33
        `author 's voice echoes through time with this thought:`, // 34
        `From the depths of experience, author shares,`,    // 35
        `In the tapestry of life, author weaves,`,         // 36
        `As the journey unfolds, author beautifully states,`, // 37
        `In the delicate balance of existence, author finds,`, // 38
        `In the quiet moments, author reveals,`,           // 39
        `Through the lens of experience, author enlightens us with,`, // 40
        `In the visionary mind of author, shines this truth:`, // 41
        `From the lyrical wisdom of author`, // 42
        `In the serene thoughts of author, we uncover,`, // 43
        `In the gentle wisdom shared by author`, // 44
        `With clarity and grace, author teaches,`, // 45
        `As author once reflected,`, // 46
        `In the brilliance of author ’s words, we find,`, // 47
        `author guides us with this wisdom:`, // 48
        `As author once thoughtfully shared,`, // 49
        `In the heart of author ’s teachings, we uncover,`, // 50
        `With a keen insight, author unveils,`, // 51
        `author ’s words ring true as they state,`, // 52
        `From the depths of author ’s reflections, comes,`, // 53
        `As author masterfully articulated,`, // 54
        `In the resounding wisdom of author,`, // 55
        `With eloquence, author imparts this:`, // 56
        `In the timeless insight of author, we learn,`, // 57
        `As the wise author once wrote,`, // 58
        `In the peaceful reflections of author, we find,`, // 59
    
    ];

    const introReader = [
        "introReader1.mp3",   // 0
        "introReader2.mp3",   // 1
        "introReader3.mp3",   // 2
        "introReader4.mp3",   // 3
        "introReader5.mp3",   // 4
        "introReader6.mp3",   // 5
        "introReader7.mp3",   // 6
        "introReader8.mp3",   // 7
        "introReader9.mp3",   // 8
        "introReader10.mp3",  // 9
        "introReader11.mp3",  // 10
        "introReader12.mp3",  // 11
        "introReader13.mp3",  // 12
        "introReader14.mp3",  // 13
        "introReader15.mp3",  // 14
        "introReader16.mp3",  // 15
        "introReader17.mp3",  // 16
        "introReader18.mp3",  // 17
        "introReader19.mp3",  // 18
        "introReader20.mp3",  // 19
        "introReader21.mp3",  // 20
        "introReader22.mp3",  // 21
        "introReader23.mp3",  // 22
        "introReader24.mp3",  // 23
        "introReader25.mp3",  // 24
        "introReader26.mp3",  // 25
        "introReader27.mp3",  // 26
        "introReader28.mp3",  // 27
        "introReader29.mp3",  // 28
        "introReader30.mp3",  // 29
        "introReader31.mp3",  // 30
        "introReader32.mp3",  // 31
        "introReader33.mp3",  // 32
        "introReader34.mp3",  // 33
        "introReader35.mp3",  // 34
        "introReader36.mp3",  // 35
        "introReader37.mp3",  // 36
        "introReader38.mp3",  // 37
        "introReader39.mp3",  // 38
        "introReader40.mp3",  // 39
        "introReader41.mp3",  // 40
        "introReader42.mp3",  // 41
        "introReader43.mp3",  // 42
        "introReader44.mp3",  // 43
        "introReader45.mp3",  // 44
        "introReader46.mp3",  // 45
        "introReader47.mp3",  // 46
        "introReader48.mp3",  // 47
        "introReader49.mp3",  // 48
        "introReader50.mp3",  // 49
        "introReader51.mp3",  // 50
        "introReader52.mp3",  // 51
        "introReader53.mp3",  // 52
        "introReader54.mp3",  // 53
        "introReader55.mp3",  // 54
        "introReader56.mp3",  // 55
        "introReader57.mp3",  // 56
        "introReader58.mp3",  // 57
        "introReader59.mp3",  // 58
        "introReader60.mp3"   // 59
    ];

    const quoteReader = [
        "quoteReader1.mp3",  // 0
        "quoteReader2.mp3",  // 1
        "quoteReader3.mp3",  // 2
        "quoteReader4.mp3",  // 3
        "quoteReader5.mp3",  // 4
        "quoteReader6.mp3",  // 5
        "quoteReader7.mp3",  // 6
        "quoteReader8.mp3",  // 7
        "quoteReader9.mp3",  // 8
        "quoteReader10.mp3", // 9
        "quoteReader11.mp3", // 10
        "quoteReader12.mp3", // 11
        "quoteReader13.mp3", // 12
        "quoteReader14.mp3", // 13
        "quoteReader15.mp3", // 14
        "quoteReader16.mp3", // 15
        "quoteReader17.mp3", // 16
        "quoteReader18.mp3", // 17
        "quoteReader19.mp3", // 18
        "quoteReader20.mp3", // 19
        "quoteReader21.mp3", // 20
        "quoteReader22.mp3", // 21
        "quoteReader23.mp3", // 22
        "quoteReader24.mp3", // 23
        "quoteReader25.mp3", // 24
        "quoteReader26.mp3", // 25
        "quoteReader27.mp3", // 26
        "quoteReader28.mp3", // 27
        "quoteReader29.mp3", // 28
        "quoteReader30.mp3", // 29
        "quoteReader31.mp3", // 30
        "quoteReader32.mp3", // 31
        "quoteReader33.mp3", // 32
        "quoteReader34.mp3", // 33
        "quoteReader35.mp3", // 34
        "quoteReader36.mp3", // 35
        "quoteReader37.mp3", // 36
        "quoteReader38.mp3", // 37
        "quoteReader39.mp3", // 38
        "quoteReader40.mp3", // 39
        "quoteReader41.mp3", // 40
        "quoteReader42.mp3", // 41
        "quoteReader43.mp3", // 42
        "quoteReader44.mp3", // 43
        "quoteReader45.mp3", // 44
        "quoteReader46.mp3", // 45
        "quoteReader47.mp3", // 46
        "quoteReader48.mp3", // 47
        "quoteReader49.mp3", // 48
        "quoteReader50.mp3", // 49
        "quoteReader51.mp3", // 50
        "quoteReader52.mp3", // 51
        "quoteReader53.mp3", // 52
        "quoteReader54.mp3", // 53
        "quoteReader55.mp3", // 54
        "quoteReader56.mp3", // 55
        "quoteReader57.mp3", // 56
        "quoteReader58.mp3", // 57
        "quoteReader59.mp3", // 58
        "quoteReader60.mp3"  // 59
    ];
    
    
    
    /*Define the newAuthors array
    const newAuthor = [
        "Imajin",           // newAuthors[0] 
        "Bruz Liz",         // newAuthors[1]
        "Bruz Lily",        // newAuthors[2]
        "Mi$$ Bad Mind",    // newAuthors[3] 
        "Gyala Barbie",     // newAuthors[4] 
        "Dorian Gray",      // newAuthors[5] 
        "Mickey",           // newAuthors[6] 
        "111 Doctor B",     // newAuthors[7] 
        "Princess Margie",  // newAuthors[8]
        "Kinara Fao",       // newAuthors[9] 
        "Pretty Fay",       // newAuthors[10]
        "Amaya Salvada",    // newAuthors[11] 
        "Tabeh Tron",       // newAuthors[12] 
        "Lilpretty Nigga",  // newAuthors[13]
        "Quinnshitt Mishy", // newAuthors[14] 
        "Bexy Dexy",        // newAuthors[15] 
        "Milly Mungats",    // newAuthors[16]
        "Uphreasia Migose",  // newAuthors[17] 
        "Naya Milae",       // newAuthors[18] 
        "Misting Enable Mreggae", // newAuthors[19]
        "Vulence Dali"      // newAuthors[20] select
    ];

    */
    


    const imajinQuotes = [
        { quote: "Life is the art of drawing without an eraser, embracing every mark as part of the masterpiece.", author: newAuthors[0], reader: "quote1.mp3",  intro: intros[0] },
        { quote: "Life isn't measured by the breaths we take, but by the whispers of the heart that ignite our souls.", author: newAuthors[18], intro:intros[20], reader: "quote2.mp3" },
        { quote: "Love is the art of seeing the infinite beauty in someone else's imperfection.", author: newAuthors[3],intro: intros[4], reader:"quote3.mp3" },
        { quote: "A true friend is the one who plays the melody of your heart, even when you forget the tune.", author: newAuthors[9], intro:intros[15], reader: "quote4.mp3" },
        { quote: "Art is the language of the soul, translating feelings that words cannot capture.", author: newAuthors[7], intro:intros[17], reader: "quote5.mp3" },
        { quote: "Life dances on, not in the steps we perfect, but in the stumbles we rise from with grace.", author: newAuthors[2], intro:intros[13], reader: "quote6.mp3" },
        { quote: "Love is not found in grand gestures but in the quiet moments where two hearts beat as one.", author: newAuthors[12], intro:intros[4], reader: "quote7.mp3" },
        { quote: "Friendship is the canvas where we paint our shared dreams, creating colors that will never fade.", author: newAuthors[0], intro:intros[9], reader: "quote8.mp3" },
        { quote: "Music is not heard with the ears, but felt with the spirit; it is the sound of the universe singing.", author: newAuthors[4], intro:intros[2], reader: "quote9.mp3" },
        { quote: "The journey of life is not about where you're going, but who walks beside you when the roads are unknown.", author: newAuthors[5], intro: intros[18], reader: "quote10.mp3" },
        { quote: "True art isn't what you see; it's what you feel long after the moment has passed.",  author: newAuthors[19], intro: intros[6], reader: "quote11.mp3" },
        { quote: "Love is the silent conversation between two souls, where words fall away and only the truth remains.", author: newAuthors[10], intro: intros[9], reader: "quote12.mp3" },
        { quote: "Friendship is the quiet miracle that grows in the garden of time, nourished by trust and laughter.", author:  newAuthors[0], intro:intros[22], reader: "quote13.mp3"}, 
        { quote: "Music is the heartbeat of the universe, connecting us all in a symphony only the soul can hear.",  author:  newAuthors[6], intro:intros[22], reader: "quote14.mp3" },
        { quote: "Life’s beauty is not in perfection but in the courage to live boldly, with all its mess and magic.", author:  newAuthors[20], intro:intros[21], reader: "quote15.mp3" },
        { quote: "Love is the art of writing poetry on the canvas of time, with ink made of shared moments and memories.", author: newAuthors[0],intro:intros[4],reader: "quote16.mp3"  },
        { quote: "A friend is the echo of your laughter, the mirror to your tears, and the hand that holds yours through it all.",  author: newAuthors[0],intro:intros[15],reader: "quote17.mp3" },
        { quote: "Art is where the heart meets the hands, crafting stories that words alone could never tell.", author: newAuthors[1], intro:intros[12], reader: "quote18.mp3" },
        { quote: "Love isn't just a feeling; it's a choice to keep painting the same picture, no matter how many times it rains.", author:  newAuthors[17], intro:intros[13], reader: "quote19.mp3" },
        { quote: "Friendship is not in the years we share but in the moments that stay with us long after time moves on.", author: newAuthors[0], intro:intros[5], reader: "quote20.mp3"  },
        { quote: "Life is a canvas, and love is the brush that paints our existence with vibrant hues.", author: newAuthors[11], intro:intros[16], reader: "quote22.mp3" },
        { quote: "True friendship is a symphony of shared moments, each note a testament to mutual trust and respect.", author: newAuthors[13], intro:intros[24], reader: "quote21.mp3"},
        { quote: "Art is the soul's whisper, a gentle reminder that beauty exists in every breath we take.", author: newAuthors[16],intro:intros[19], reader: "quote23.mp3" },
        { quote: "Love is the spark that ignites the flame of creativity, illuminating even the darkest of paths.", author: newAuthors[15], intro:intros[10], reader: "quote24.mp3" },
        { quote: "In the dance of life, every step we take is choreographed by the rhythm of our hearts.", author: newAuthors[14], intro: intros[21], reader: "quote25.mp3" },
        { quote: "Music is the universal language that bridges the gaps between our souls and the infinite cosmos.", author: newAuthors[9], intro:intros[4], reader: "quote26.mp3" },
        { quote: "Friendship is a garden where each seed of kindness blooms into a lifelong bond.", author: newAuthors[0], intro:intros[8], reader:"quote27.mp3" },
        { quote: "Life's greatest masterpiece is created in the moments we share with those we love.", author: newAuthors[8], intro:intros[20], reader: "quote28.mp3" },
        { quote: "The essence of art is found in the silent dialogue between the creator and the observer.", author: newAuthors[3], intro:intros[2], reader: "quote29.mp3" },
        { quote: "Love is the melody that harmonizes the symphony of our existence.", author: newAuthors[2], intro:intros[28], reader: "quote30.mp3" },
        { quote: "In every brushstroke, there is a story waiting to be told and a heart waiting to be touched.", author: newAuthors[6], intro:intros[16], reader: "quote31.mp3" },
        { quote: "True friends are the stars that guide us through life's darkest nights, their light unwavering.", author: newAuthors[14], intro:intros[11], reader: "quote32.mp3" },
        { quote: "Music is the heartbeat of the universe, a constant reminder that we are all connected.", author: newAuthors[7], intro:intros[29], reader: "quote33.mp3" },
        { quote: "Life is a fleeting moment, but the love we share echoes through eternity.", author: newAuthors[12], intro:intros[16], reader: "quote34.mp3" },
        { quote: "Friendship is the foundation upon which the castle of happiness is built.", author: newAuthors[0], intro:intros[23], reader: "quote35.mp3" },
        { quote: "Art is the silent scream of the soul, an expression of the inexpressible.", author: newAuthors[15], intro:intros[20], reader: "quote36.mp3" },
        { quote: "Love is the thread that weaves our lives into a tapestry of joy and sorrow, beauty and pain.", author: newAuthors[11], intro:intros[25], reader: "quote37.mp3" },
        { quote: "In the melody of life, every note we play contributes to the symphony of our journey.", author: newAuthors[19], intro:intros[14], reader: "quote38.mp3" },
        { quote: "True beauty lies not in the eyes, but in the heart that perceives it.", author: newAuthors[4], intro:intros[19], reader: "quote39.mp3" },
        { quote: "Life is a dance, and the partners we choose determine the steps we take and the memories we make.", author: newAuthors[1], intro:intros[9], reader: "quote40.mp3" },
        { quote: "The stars above and the dreams within are connected by the light of hope.", author: newAuthors[5], intro:intros[25], reader: "quote41.mp3" },
        { quote: "Friendship is the invisible bridge that connects hearts across oceans and time.", author: newAuthors[0], intro:intros[41], reader: "quote42.mp3" },
        { quote: "With every breath, life paints a new stroke on the canvas of our existence.", author: newAuthors[13], intro:intros[44], reader: "quote43.mp3" },
        { quote: "Love is the light that flickers even in the darkest corners of the heart.", author: newAuthors[1], intro:intros[32], reader: "quote44.mp3" },
        { quote: "Courage is the quiet voice that whispers 'I will try again tomorrow.", author: newAuthors[17], intro:intros[35], reader: "quote45.mp3" },
        { quote: "In the embrace of nature, we rediscover the beauty of simplicity and the power of peace.", author: newAuthors[8], intro:intros[38], reader: "quote46.mp3" },
        { quote: "Happiness is not found in what we possess, but in how deeply we cherish the present moment.", author: newAuthors[18], intro:intros[34], reader: "quote47.mp3" },
        { quote: "In every heartbeat, there’s a story waiting to be told, an adventure waiting to be lived.", author: newAuthors[20], intro:intros[37], reader: "quote48.mp3" },
        { quote: "Hope is the lighthouse guiding us through the storms of doubt and fear.", author: newAuthors[10], intro:intros[44], reader: "quote49.mp3" },
        { quote: "Wisdom grows not from knowing the answers, but from embracing the questions.", author: newAuthors[16], intro:intros[40], reader: "quote50.mp3" },
        { quote: "The beauty of life lies in its imperfections, which paint the canvas of our existence with vibrant hues.", author: newAuthors[3], intro: intros[36], reader: "quote51.mp3" },
        { quote: "Love is the melody that plays in the background, even when silence fills the air.", author: newAuthors[5], intro: intros[39], reader: "quote52.mp3" },
        { quote: "Friendship is the golden thread that weaves through the fabric of our lives, binding hearts together.", author: newAuthors[6], intro: intros[31], reader: "quote53.mp3" },
        { quote: "In every sunset, there’s a promise of a new dawn, a chance to begin again.", author: newAuthors[19], intro: intros[38], reader: "quote54.mp3" },
        { quote: "Love is the gentle whisper that tells us we are not alone, that we are cherished.", author: newAuthors[7], intro: intros[27], reader: "quote55.mp3" },
        { quote: "Life is a journey, and the moments we share with loved ones are the treasures we collect along the way.", author: newAuthors[12], intro: intros[0], reader: "quote56.mp3" },
        { quote: "True friendship is like a lighthouse, guiding us through the storms of life and leading us to safe harbors.", author: newAuthors[2], intro: intros[30], reader: "quote57.mp3" },
        { quote: "In the tapestry of existence, love is the thread that holds everything together.", author: newAuthors[4], intro: intros[22], reader: "quote58.mp3" },
        { quote: "Life is a dance of shadows and light, and love is the rhythm that moves us all.", author: newAuthors[1], intro: intros[16], reader: "quote59.mp3" },
        { quote: "With every heartbeat, we write a new chapter in the story of our lives, filled with love and wonder.", author: newAuthors[20], intro: intros[9], reader: "quote60.mp3" } 
    ];

   
    // Select elements
    const quoteIcon = document.querySelector('.quote-icon');
    const quoteSideDiv = document.querySelector('.quote-side-div');
    const quoteClose = document.querySelector('.quote-close');

    // Show the side menu when the quote icon is clicked
    quoteIcon.addEventListener('click', () => {
        quoteSideDiv.classList.add('open');

        // Reset index if it exceeds the number of quotes
        if (currentQuoteIndex >= imajinQuotes.length) {
            currentQuoteIndex = 0;
        }

        // Show the current quote
        showCurrentQuote(currentQuoteIndex);

        pauseMedia(currentVideo);
        pauseMedia(currentSong);
        pauseMedia(currentVoice);
        pauseMedia(narrator);

        
    });

    // Hide the side menu when the close icon is clicked
    quoteClose.addEventListener('click', () => {
       closeQuoteRader();
    });

    function closeQuoteRader() {
        quoteSideDiv.classList.remove('open');

        if(currentReader) {
            currentReader.pause();
        }
    }

    function getModifiedAuthor(author) {
        const authorMap = {
            "Friends of imajin": "Imajin",
            "Mi$$ Bad Mind": "Winnie",
            "Naya Milae": "Naya",
            "Kinara Fao": "Pagees JB",
            "lilpretty nigga" : "Lilpretty",
            "milly mungats" : "Milly",
            "bruz Lily" : "Lily Wangari",
            'misting Enable Mreggae' : 'Enable Mreggae',
            "Mickey": "Rihanna Mickey",
            'Bruz Liz' : 'Elizabeth',
            'Milly Mungats' : 'Milly'
            // Add more replacements as needed
        };
    
        return authorMap[author] || author; // Return modified name or original author if not found
    }
    
    function getBackgroundImageForAuthor(author) {
        const authorIndex = newAuthors.indexOf(author); // Find the index of the author in newAuthors
        if (authorIndex !== -1) {
            return bgPhotos[authorIndex]; // Return the corresponding image from bgPhotos
        }
        return null; // Return null if no image is found
    }
    

    function showCurrentQuote(index) {
        const currentQuote = imajinQuotes[index]; // Get the current quote object

        // Update the relevant elements in your side menu
        const quoteTextElement = document.querySelector('.quote-text'); // Ensure you have this element in your HTML
        const quoteAuthorElement = document.querySelector('.quote-author'); // Ensure you have this element in your HTML
        const quoteSideDiv = document.querySelector('.quote-side-div'); // Select the side div for background

         // Get the current author and modify it if needed
        let currentAuthor = getModifiedAuthor(currentQuote.author);
        
        // Display the quote with its intro and author
        quoteTextElement.innerHTML = `<strong>${currentQuote.intro.replace('author', currentAuthor)}</strong> <p>${currentQuote.quote}</p>`;
        quoteAuthorElement.textContent = currentAuthor; // Display the modified author if necessary
       
        // Get the background image based on the original author from the quote
        const bgImage = getBackgroundImageForAuthor(currentQuote.author); // Use currentQuote.author directly


        if (bgImage) {
            // Set the background image if found
            quoteSideDiv.style.backgroundImage = `url(${bgImage})`;
        } else {
            // Set a default background if no image is found
            quoteSideDiv.style.backgroundImage = "url('logo.jpg')";
        }

        
        const audio = new Audio(currentQuote.reader); // Create an audio object

        // Stop and pause the current audio if it's playing
        if (currentReader && !currentReader.paused) {
            currentReader.pause(); // Pause the current audio
            currentReader.currentTime = 0; // Reset to the beginning (optional)
        }
    
        // Assign the new audio to currentReader and play it
        currentReader = audio;
        currentReader.play(); // Play the audio

        if(currentVideo) {
            currentVideo.pause();
            isPlaying = false;
        }

        currentReader.addEventListener('ended', () => {
            disableNextAndPrevBtn(false);
        });

        currentReader.addEventListener('playing', () => {
            disableNextAndPrevBtn(true);
        });
    }

    document.addEventListener('click', (event) => {
        const quoteSideDiv = document.querySelector('.quote-side-div');
        
        if (!quoteSideDiv.contains(event.target) && quoteSideDiv.classList.contains('open')) {
            if (currentReader.paused) {
                closeQuoteRader();
            }
        }
    }, true);
    
    

    const copyQuoteBtn = document.querySelectorAll('.quote-controls-buttons button')[0];
    const  prevQuoteBtn = document.querySelectorAll('.quote-controls-buttons button')[1];
    const nextQuoteBtn = document.querySelectorAll('.quote-controls-buttons button')[2];
    const downloadReaderBtn = document.querySelectorAll('.quote-controls-buttons button')[3];


    function disableNextAndPrevBtn(state){
        nextQuoteBtn.disabled = state;
        prevQuoteBtn.disabled = state;
        downloadReaderBtn.disabled = state;
        
    }

    nextQuoteBtn.onclick = function () {
        currentQuoteIndex = (currentQuoteIndex + 1) % imajinQuotes.length;
        showCurrentQuote(currentQuoteIndex);
        disableNextAndPrevBtn(true);
    }

    prevQuoteBtn.onclick = function() {
        // Move to the previous quote
        if(currentQuoteIndex > 0) {
            currentQuoteIndex--; // Decrement to move to the previous quote
        } else {
            currentQuoteIndex = imajinQuotes.length - 1; // Loop back to the last quote
        }
        showCurrentQuote(currentQuoteIndex);
        disableNextAndPrevBtn(true);
    }

    copyQuoteBtn.onclick = function () {
        const texts = imajinQuotes[currentQuoteIndex];
        const modifiedAuthor = getModifiedAuthor( texts.author);
        const fullText = texts.intro.replace('author',modifiedAuthor) + " " +  texts.quote + " " + " – Authored by " + modifiedAuthor;
        navigator.clipboard.writeText(fullText).then(() => {
            copyQuoteBtn.innerHTML = '<i class="fas fa-check"></i> Copied';

            setTimeout(function() {
                copyQuoteBtn.innerHTML = '<i class="fas fa-clipboard"></i> Copy';
            },3000)
        }).catch(err => {
            console.error("failed tp copy error", err)
            copyQuoteBtn.innerHTML = '<i class="fas fa-xmark"></i> Failed';

            setTimeout(function() {
                copyQuoteBtn.innerHTML = '<i class="fas fa-clipboard"></i> Copy';
            },3000)
        })
    }

    downloadReaderBtn.addEventListener('click', function () {
        closeQuoteRader();
        document.querySelector('.quote-preview-overlay').style.display = 'flex';
        
        displayContent(currentQuoteIndex);
    });

    const displayContent = function (index) {
        const quotetextArea = document.querySelector('.quote-preview-text');
        const imagePreview = document.querySelector('.quote-preview-image .image-arena');
        const audioField = document.querySelector('.quote-preview-audio');

        const quotePreview = imajinQuotes[index].quote;
        const bgImage = getBackgroundImageForAuthor(imajinQuotes[index].author);
        const audioPreview = imajinQuotes[index].reader;

        const modifiedAuthor = getModifiedAuthor(imajinQuotes[index].author);
        const fullText = imajinQuotes[index].intro.replace('author',modifiedAuthor) + " " +  quotePreview + " " + " – Authored by " + modifiedAuthor;

         
        quotetextArea.innerHTML = `<p> ${fullText }</p>`;
        imagePreview.innerHTML = `<img src='${bgImage}'>`;
        audioField.innerHTML = `<audio src='${audioPreview}'>`;
        document.querySelector('.quote-preview-image .text-arena').innerHTML = `<p> ${fullText }</p>`;

        currentReader.play();

    }

    const imgDownload =  document.querySelectorAll('.quote-preview-actions button')[0];
    const audioDownload = document.querySelectorAll('.quote-preview-actions button')[1];
    const closePreview = document.querySelectorAll('.quote-preview-actions button')[2];

    closePreview.onclick = () => { document.querySelector('.quote-preview-overlay').style.display = 'none'; currentReader.pause()}

    audioDownload.onclick = function () {
        currentReader.pause();
        audioDownload.innerHTML = '<i class="fas fa-spinner"></i> Downloading';

        setTimeout(function () {

            const currentvoiceReader = imajinQuotes[currentQuoteIndex].reader;
            const audioName = getModifiedAuthor(imajinQuotes[currentQuoteIndex].author)
            const link = document.createElement('a');
            link.href = currentvoiceReader;
            link.download = `${audioName}.mp3`;

            // Append the link to the body (required for Firefox)
            document.body.appendChild(link);
            
            // Trigger the download
            link.click();
            
            // Remove the link after triggering download
            document.body.removeChild(link);

            audioDownload.innerHTML = '<i class="fas fa-volume-up"></i> Download Audio';
        },2000);
    }

    imgDownload.onclick = function () {
        currentReader.pause();
        const imgurl = getBackgroundImageForAuthor(imajinQuotes[currentQuoteIndex].author);
        const quoteText = imajinQuotes[currentQuoteIndex].quote;
        const modifiedAuthor = getModifiedAuthor(imajinQuotes[currentQuoteIndex].author);
        const fullText = imajinQuotes[currentQuoteIndex].intro.replace('author',modifiedAuthor) + " " +  quoteText;

        downloadTextOnTopOfImage(imgurl,fullText, modifiedAuthor);

    }

    function downloadTextOnTopOfImage(imgurl, fullText, authorName) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
    
        const img = new Image();
        img.src = imgurl;
    
        img.onload = function () {
            // Set the canvas dimensions to match the image
            canvas.width = img.width;
            canvas.height = img.height;
    
            // Draw the image onto the canvas
            ctx.drawImage(img, 0, 0);
    
            // Draw a semi-transparent black rectangle over the image to darken it
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // 0.7 opacity for better contrast
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Create a gradient for the text
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, '#4fe305');
            gradient.addColorStop(0.5, '#03ffd5');
            gradient.addColorStop(1, '#03f7db');
    
            // Set text properties (we will adjust the font size dynamically)
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = gradient;
    
            // Function to calculate the appropriate font size to fit the text
            function calculateFontSize(text, maxWidth, startingFontSize, minFontSize) {
                let fontSize = startingFontSize;
                do {
                    ctx.font = `bold ${fontSize}px Arial`;
                    const metrics = ctx.measureText(text);
                    if (metrics.width <= maxWidth) {
                        return fontSize;
                    }
                    fontSize -= 1; // Decrease font size until it fits
                } while (fontSize >= minFontSize);
                return fontSize; // Return the smallest font size if it doesn't fit
            }
    
            // Calculate and set the font size for the full text
            const maxWidth = canvas.width - 40; // Max width for the text
            const startingFontSize = canvas.height / 15; // Start with a large size based on image height
            const minFontSize = canvas.height / 30; // Minimum font size
            const fontSize = calculateFontSize(fullText, maxWidth, startingFontSize, minFontSize);
    
            // Wrap text to the next line if it's too long
            const words = fullText.split(' ');
            let line = '';
            const lineHeight = fontSize * 1.2; // Adjust line height based on font size
            const x = canvas.width / 2;
            let y = canvas.height / 2 - ((words.length / maxWidth) * lineHeight) / 2; // Start y-position for centered text
    
            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + ' ';
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width;
    
                if (testWidth > maxWidth && i > 0) {
                    ctx.fillText(line, x, y);
                    line = words[i] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            ctx.fillText(line, x, y);
    
            // Set styles for the author name (golden color) and adjust font size
            const authorFontSize = calculateFontSize(authorName, maxWidth, fontSize * 0.8, minFontSize * 0.8);
            ctx.font = `bold ${authorFontSize}px Arial`; // Adjusted font size for author name
            ctx.fillStyle = 'gold'; // Golden color for author name
            ctx.fillText(authorName, canvas.width / 2, y + lineHeight + 20); // Position for author name
    
            // Create a download link
            const link = document.createElement('a');
            link.download = `${authorName}.jpg`; // Specify the name for the downloaded image
            link.href = canvas.toDataURL(); // Convert canvas to image URL
    
            // Trigger the download
            link.click();
        };
    }
    
    
    const fetchedQuotes = imajinQuotes.map(q => q.quote);
    const imageBtn = document.querySelectorAll('.more-actions button')[0];
    const  nameBtn = document.querySelectorAll('.more-actions button')[1];
    const testBtn =  document.querySelectorAll('.more-actions button')[2];
    const introTextBtn = document.querySelectorAll('.more-actions button')[3];
    const quotetextBtn = document.querySelectorAll('.more-actions button')[4];
    const donloadqtAudio = document.querySelectorAll('.more-actions button')[5];
    const generateBtn = document.querySelectorAll('.more-actions button')[6];

    
    const disableBtn = function(btn,state) {
        btn.disabled = state;
    }

    function checkUserQuote() {
    
        // Check if userQuote has all required properties
        if (userQuote.intro && userQuote.name && userQuote.image && userQuote.quote) {
           disableBtn(testBtn, false) // Enable the button if all properties are present
        } else {
            disableBtn(testBtn, true) // Disable the button if any property is missing
        }
    }

    fetchedQuotes.forEach((q, index) => {
        const li = document.createElement('li');
        li.textContent = index + 1;  // Displays the index (1-based)
        document.querySelector('.quote-list ul').appendChild(li);

        li.addEventListener('click', function () {
            document.querySelectorAll('.quote-list ul li').forEach(li => li.classList.remove('active'));
            displayQuotText(q, index);
            currentQuoteMakerElement = li;
            currentQuoteMakerElement.classList.add('active');

            userQuote.quote = q;
            disableBtn(quotetextBtn, false);
            checkUserQuote();
        })
    });
    
    intros.forEach((introQuote,index) => {
        const li = document.createElement('li');
        li.textContent = index + 1;  // Displays the index (1-based)
        document.querySelector('.quote-intro-list ul').appendChild(li);

        li.addEventListener('click', () => {
            document.querySelectorAll('.quote-intro-list ul li').forEach(li => li.classList.remove('active'));
            displayQuoteIntro(introQuote,index);
            currentIntroElement = li;
            currentIntroElement.classList.add('active');


            // Storing the selected intro in userQuote object
            userQuote.intro = introQuote; 
            disableBtn(introTextBtn, false);
            checkUserQuote();
        });
    });

    let introCount = 0;

    quotemakerIcon.addEventListener('click', function () {
        const overlay = document.querySelector('.quote-maker-verlay');
        const introPreview = document.querySelector('.quote-intro-preview');
        const quoteMakerPreview = document.querySelector('.quote-maker-preview');
        
        // Show the overlay
        overlay.style.display = 'flex';

        introPreview.innerHTML = '';
        quoteMakerPreview.innerHTML = '';
      
        if(introCount < 1) {
            displayRandomIntroAndQuote();
            
        }

        introCount++;
    });
    

    function displayRandomIntroAndQuote() {
        const introPreview = document.querySelector('.quote-intro-preview');
        const quoteMakerPreview = document.querySelector('.quote-maker-preview');
        const notice = document.querySelector('.quote-maker-notice');

        const randomIntroIndex = Math.floor(Math.random() * intros.length);
        const randomQuoteIndex = Math.floor(Math.random() * fetchedQuotes.length);

       
        notice.style.display = 'block';

        // Select the li element based on the random intro index
        const allIntroElements = document.querySelectorAll('.quote-intro-list ul li');
        
        // Remove 'active' class from all intro elements
        allIntroElements.forEach(li => li.classList.remove('active'));

        // Set the current intro element and add the 'active' class
        currentIntroElement = allIntroElements[randomIntroIndex];
        
        document.querySelectorAll('.quote-list ul li').forEach(li => li.classList.remove('active'));

        currentQuoteMakerElement = document.querySelectorAll('.quote-list ul li')[randomQuoteIndex];

        introPreview.parentElement.scrollIntoView({ behavior: "smooth", block: "center"});

        // Choose the correct notice audio based on window width
        const noticeAudio = window.innerWidth < 800 ? new Audio(notice2) : new Audio(notice1);
        currentNotice = noticeAudio;
         
        pauseMedia(currentAudio);
        pauseMedia(currentVideo);
        pauseMedia(currentAudioDescrption);
        pauseMedia(currentSong);
        pauseMedia(currentVoice);
         
        currentNotice.play();
 
        currentNotice.onended = () => {
            document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'))
            notice.style.display = 'none';
            generateBtn.disabled = true;
            testBtn.disabled = true;
            introTextBtn.disabled = true;
            quotetextBtn.disabled = true;
            donloadqtAudio.disabled = true;

            document.querySelectorAll('.quote-intro-list ul li').forEach(li => li.classList.remove('active'));
            document.querySelectorAll('.quote-list ul li').forEach(li => li.classList.remove('active'));
            document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'));
            
            const quoteMakerPreview = document.querySelector('.quote-maker-preview');
            const introPreview = document.querySelector('.quote-intro-preview');

            quoteMakerPreview.innerHTML = '';
            introPreview.innerHTML = '';
     
        };


        currentNotice.ontimeupdate = () => {
            let times = currentNotice.currentTime;

            // Calculate the delay (in milliseconds) until each event
            const introDelay = Math.max(0, (4 - times) * 1000);  // Time until 4 seconds
            const quoteDelay = Math.max(0, (9 - times) * 1000);  // Time until 9 seconds
            const imageBtnDelay = Math.max(0, (14 - times) * 1000); // Time until 14 seconds
            const testBtnDelay = Math.max(0, (19 - times) * 1000); // Time until 19 seconds
            const generateBtnDelay = Math.max(0, (23 - times) * 1000); // Time until 23 seconds

            // Trigger intro at 4 seconds
            setTimeout(function () {
                currentIntroElement.classList.add('active');
                introPreview.innerHTML =`<p>${intros[randomIntroIndex].replace("author", "Imajin")}</p>`;
                
            }, introDelay);

            // Trigger quote at 9 seconds
            setTimeout(function () {
                currentQuoteMakerElement.classList.add('active');
                quoteMakerPreview.innerHTML =`<p>${fetchedQuotes[randomQuoteIndex]}</p>`;
            }, quoteDelay);

            // Scroll to image button and activate it at 14 seconds
            setTimeout(function () {
                imageBtn.scrollIntoView({ behavior: "smooth", block: "center" });
                document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'));
                imageBtn.classList.add('active');
            }, imageBtnDelay);

            // Scroll to test button and activate it at 19 seconds
            setTimeout(function () {
                testBtn.scrollIntoView({ behavior: "smooth", block: "center" });
                document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'));
                testBtn.classList.add('active');
            }, testBtnDelay);

            // Scroll to generate button and activate it at 23 seconds
            setTimeout(function () {
                generateBtn.scrollIntoView({ behavior: "smooth", block: "center" });
                document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'));
                generateBtn.classList.add('active');
            }, generateBtnDelay);
        };

    }


    document.querySelector('.quote-maker-close').addEventListener('click', function () {
        document.querySelector('.quote-maker-verlay').style.display = 'none';
        document.querySelectorAll('.quote-intro-list ul li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.quote-list ul li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.more-actions button').forEach(btn => btn.classList.remove('active'));
        
        const quoteMakerPreview = document.querySelector('.quote-maker-preview');
        const introPreview = document.querySelector('.quote-intro-preview');

        quoteMakerPreview.innerHTML = '';
        introPreview.innerHTML = '';

        generateBtn.disabled = true;
        testBtn.disabled = true;
        introTextBtn.disabled = true;
        quotetextBtn.disabled = true;
        donloadqtAudio.disabled = true;
        userQuote.image = null;
        userQuote.name = null;
        userQuote.quote = null;

    });

    let typingInProgress = false; // Track if typing is in progress

    function typewriterQuote(element, text) {
        const notice = document.querySelector('.quote-maker-notice');
        notice.style.display = 'flex';
        // If typing is already in progress, clear the element and stop the current typing
        if (typingInProgress) {
            clearTimeout(typingTimeout); // Clear the timeout to stop the previous typing
            typingInProgress = false; // Reset the typing state
        }

        let index = 0;
        element.innerHTML = '<p></p>'; // Start with an empty <p> tag

        // Create a function to add each letter with a delay
        function typeNextChar() {
            if (index < text.length) {
                // Update the content inside the <p> tag
                element.querySelector('p').innerHTML += text.charAt(index);
                index++;
                typingTimeout = setTimeout(typeNextChar, 50); // Delay between characters
            } else {
                
                typingInProgress = false; // Typing is finished
            }
        }

        typingInProgress = true; // Set typing state to true
        typeNextChar(); // Start typing

        
    }

   
   // Updated function to handle displaying the quote and playing audio
    function displayQuoteIntro(quote, index) {
        const introPreview = document.querySelector('.quote-intro-preview');
        
        // Replace 'author' with 'Imajin' if found, otherwise just display the quote as is
        const modifiedQuote = quote.includes('author') ? quote.replace('author', 'Imajin') : quote;

        // Display the modified or unmodified quote
         typewriterQuote(introPreview, modifiedQuote);

        // Scroll to the preview
        introPreview.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        playIntroMaker(introReader[index])
    }

    function playIntroMaker (audio) {
        // Play the corresponding audio from introReader
        const notice = document.querySelector('.quote-maker-notice');
        
        if(currentIntroMaker && currentIntroMaker !== audio) {
            currentIntroMaker.pause();
        }

        if(currentquotemaker) {
            currentquotemaker.pause();
        }

        const read = new Audio(audio); // Create a new Audio object
        currentIntroMaker = read;

        currentIntroMaker.play();

        currentIntroMaker.onended = () => {notice.style.display = 'none';}
    }

    function  displayQuotText(q, index) {
        const quoteMakerPreview = document.querySelector('.quote-maker-preview');

        typewriterQuote(quoteMakerPreview, q)

        playCurrentQuoteMaker(quoteReader[index]);

        quoteMakerPreview.scrollIntoView({behavior:"smooth", block:"center"});

        disableBtn(donloadqtAudio, false);
    }

    const playCurrentQuoteMaker = (audio) => {
        const notice = document.querySelector('.quote-maker-notice');

        if(currentquotemaker && currentquotemaker !== audio){
        currentquotemaker.pause();

        }

        if(currentIntroMaker && !currentIntroMaker.paused) {
            currentIntroMaker.pause();
        }

        const audioPrev = new Audio(audio);

        currentquotemaker = audioPrev;

        currentquotemaker.play();

        currentquotemaker.addEventListener('ended', () => {
            donloadqtAudio.disabled = false;
            notice.style.display = 'none';
        })
    }

   donloadqtAudio.onclick = (event) => {
        event.target.disabled = true;

        // Get the index of the current active quote maker element
        const quoteItems = Array.from(document.querySelectorAll('.quote-list ul li'));
        const index = quoteItems.indexOf(currentQuoteMakerElement);

        // Fetch the current plain quote text from `fetchedQuotes` and sanitize it
        let quoteText = fetchedQuotes[index]; // Get the plain text quote from fetchedQuotes
        let sanitizedQuote = quoteText.replace(/[\/\?<>\\:\*\|"]/g, ''); // Remove invalid filename characters
        sanitizedQuote = sanitizedQuote.substring(0, 50); // Optionally limit the length of the filename

        // Create a link for the audio associated with the current quote
        const link = document.createElement('a');
        link.href = quoteReader[index]; // Use the audio link from the `quoteReader` array
        link.download = `Imajin Quotes_${sanitizedQuote}.mp3`; // Use sanitized quote as the file name

        // Append the link to the document and trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up after the download
};



    introTextBtn.addEventListener('click', () => {
        const text = userQuote.intro;
        const filteredWords = /author|Imajin/g;
    
        // If userQuote.name exists, replace 'author' or 'Imajin' with userQuote.name
        let modifiedText = text.replace(filteredWords, userQuote.name || '').trim(); // Replace names with userQuote.name, defaulting to empty string
    
        // Copy the modified text to the clipboard
        navigator.clipboard.writeText(modifiedText).then(() => {
            introTextBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
    
            setTimeout(function () {
                introTextBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Intro';
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy', err);
    
            introTextBtn.innerHTML = '<i class="fas fa-xmark"></i> Failed';
    
            setTimeout(function () {
                introTextBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Intro';
            }, 3000);
        });
    });
    
    
    
    quotetextBtn.addEventListener('click', () => {
        const text = userQuote.quote;

        navigator.clipboard.writeText(text).then(() => {
            quotetextBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
    
            setTimeout(function () {
                quotetextBtn.innerHTML = '<i class="fas fa-copy"></i>Copy Quote';
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy', err);
    
            quotetextBtn.innerHTML = '<i class="fas fa-xmark"></i> Failed';
    
            setTimeout(function () {
                quotetextBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Quote';
            }, 3000);
        });
    })
    

    nameBtn.addEventListener('click', () => {
        createModalBox();
        checkUserQuote();
    });
    
    function createModalBox() {
        // Create modal elements
        const modal = document.createElement('div');
        modal.className = 'modal';
    
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
    
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        modalHeader.innerText = 'Welcome';
    
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.innerHTML = `
            <p>Please enter your name:</p>
            <div class="input-container">
                <input type="text" id="nameInputs" placeholder="Your Name" class="fancy-input">
            </div>
        `;
    
        const modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';
    
        const doneBtn = document.createElement('button');
        doneBtn.innerText = "Done";
        doneBtn.disabled = true;
    
        doneBtn.addEventListener('click', () => {
            const inputValue = document.getElementById('nameInputs').value.trim();
            if (inputValue) { // Check if the input is not empty
                userQuote.name = inputValue;
                document.body.removeChild(modal); // Close modal after setting name
            } else {
                const nameInput = document.getElementById('nameInputs');
                nameInput.placeholder = "Please enter a valid name.";
            }
        });
    
        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    
        // Add the input event listener after the input has been created
        modalBody.querySelector('#nameInputs').oninput = function () {
            doneBtn.disabled = this.value.trim() === ""; // Enable if not empty
        };
    
        modalFooter.appendChild(doneBtn);
        modalFooter.appendChild(closeBtn);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modal.appendChild(modalContent);
    
        // Add modal to the body
        document.body.appendChild(modal);
    }
    
    imageBtn.addEventListener('click', () => {
        document.querySelector('.quote-image-upload').style.display = 'flex';
    });

    document.querySelector('.close-upload').onclick = () =>{
        document.querySelector('.quote-image-upload').style.display = 'none';
    }

    document.querySelectorAll('.actions-upload button')[1].onclick = () =>{
        document.querySelector('.quote-image-upload').style.display = 'none';
        userQuote.image = null;
    }

    document.querySelectorAll('.actions-upload button')[0].disabled = true;

    document.querySelector('#imgFile').onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImgUrl = URL.createObjectURL(file);
            document.querySelector('.upload-preview').innerHTML = `<img src='${newImgUrl}' alt='${file.name}'>`;

            userQuote.image = newImgUrl;
            checkUserQuote();

            document.querySelectorAll('.actions-upload button')[0].disabled = false;
        }
    };

    document.querySelectorAll('.actions-upload button')[0].onclick = () =>{
        document.querySelector('.quote-image-upload').style.display = 'none';
        document.querySelector('.upload-preview').innerHTML =  '';
        document.querySelectorAll('.actions-upload button')[0].disabled = true;

    }

    const confirmBtn = document.querySelectorAll('.controls-test button')[0];
    const cancelBtn = document.querySelectorAll('.controls-test button')[1];
    
    testBtn.onclick = function () {
        document.querySelector('.test-quote-overlay').innerHTML =  "";
        document.querySelector('.test-content').style.backgroundImage = "url(logo.jpg)";
        document.querySelector('.test-preview-overlay').style.display = 'flex';
        const filteredWords = /author|Imajin/g;
        const words = userQuote.intro;
        // If userQuote.name exists, replace 'author' or 'Imajin' with userQuote.name
        const modifiedText = words.replace(filteredWords, userQuote.name || '').trim(); // Replace names with userQuote.name, defaulting to empty string
    
        const text = modifiedText + " " + (userQuote.quote || "(Choose Your quote)") +  " - Authored by " + (userQuote.name || "(Choose a name)");

        document.querySelector('.test-quote-overlay').innerHTML = `<p>${text}</p>`;
        document.querySelector('.test-content').style.backgroundImage = `url(${userQuote.image})`;

        const index = fetchedQuotes.indexOf(userQuote.quote);
        playCurrentQuoteMaker(quoteReader[index]);
    }

    document.querySelector('.test-close').onclick = function () {
        document.querySelector('.test-preview-overlay').style.display = 'none';
    }

    cancelBtn.onclick = function () {
        document.querySelector('.test-preview-overlay').style.display = 'none';
    }

    confirmBtn.onclick = function () {
        document.querySelector('.test-preview-overlay').style.display = 'none';

       disableBtn( generateBtn, false);
    }

    generateBtn.onclick = function () {
        const filteredWords = /author|Imajin/g;
        const words = userQuote.intro;
        // If userQuote.name exists, replace 'author' or 'Imajin' with userQuote.name
        const modifiedText = words.replace(filteredWords, userQuote.name || 'Imajin').trim(); // Replace names with userQuote.name, defaulting to empty string
    
        const fullText =  modifiedText + userQuote.quote;
        downloadTextOnTopOfImage(userQuote.image, fullText, userQuote.name);

        disableBtn(testBtn, true);
        disableBtn(generateBtn, true);
    }






    let currentStoryIndex = 0;
    const storyIcon = document.querySelector('.story-icon');
    const stories = document.querySelectorAll('.story');

    function updateStory(index, direction = 'in') {
        stories.forEach((story, i) => {
            story.classList.remove('story-slide-left', 'story-slide-right', 'story-slide-in', 'active');
            if (i === index) {
                story.classList.add('active', `story-slide-${direction}`);
            }
        });
    }

    document.querySelector('.prev-story').addEventListener('click', () => {
        const previousIndex = currentStoryIndex;
        currentStoryIndex = (currentStoryIndex === 0) ? stories.length - 1 : currentStoryIndex - 1;
        updateStory(previousIndex, 'right');
        setTimeout(() => updateStory(currentStoryIndex, 'in'), 100); // Brief delay for smooth transition
    });

    document.querySelector('.next-story').addEventListener('click', () => {
        const previousIndex = currentStoryIndex;
        currentStoryIndex = (currentStoryIndex === stories.length - 1) ? 0 : currentStoryIndex + 1;
        updateStory(previousIndex, 'left');
        setTimeout(() => updateStory(currentStoryIndex, 'in'), 100); // Brief delay for smooth transition
    });

    // Initialize the first story
    updateStory(currentStoryIndex);


    storyIcon.addEventListener('click', () => {
        document.querySelector('.story-preview').style.display = 'flex';

        pauseMedia(currentVideo);
        pauseMedia(currentSong);
        pauseMedia(currentVoice);
        pauseMedia(narrator);
    });

    document.querySelector('.stories-close').onclick = function () {
        document.querySelector('.stories-overlay').style.display = 'none';
    }

    document.querySelector('.close-dialog').onclick = function () {
        document.querySelector('.story-preview').style.display = 'none';
    }

    document.addEventListener('click', (event) => {
        const storyPreview = document.querySelector('.story-preview');
        
        // Check if the clicked target is not the story preview or any of its children
        if (!storyPreview.contains(event.target) && getComputedStyle(storyPreview).display === 'flex') {
            storyPreview.style.display = 'none';
        }
    }, true);
    

    const viewStories = document.querySelectorAll('.story-preview ul li')[0];
    const characterPreview = document.querySelectorAll('.story-preview ul li')[1];
    const SummaryView = document.querySelectorAll('.story-preview ul li')[2];

    viewStories.onclick = ()  => {
        document.querySelector('.story-preview').style.display = 'none';
        document.querySelector('.stories-overlay').style.display = 'flex';
        
    }

    characterPreview.onclick = () => {
        document.querySelector('.characters-preview-overlay').style.display = 'flex';
        document.querySelector('.story-preview').style.display = 'none';

    }

    SummaryView.onclick = function() {
        document.querySelector('.characters-view-overlay').style.display = 'flex';
        showCards ();
    }

    const characterSongtheme0 = document.querySelectorAll('.song-picker ul li')[0];
    const characterSongtheme1 = document.querySelectorAll('.song-picker ul li')[1];

    characterSongtheme0.onclick = () => {
        playCharacterTheme(characterSong0,  characterSongtheme0, 9000);
    }

    characterSongtheme1.onclick = () => {
        playCharacterTheme(characterSong1,  characterSongtheme1, 8000);
    }

    const playCharacterTheme = (themeSong, element, duration)=> {

        if(currentThemeSong && currentThemeSong !== themeSong) {
            currentThemeSong.pause();
            currentThemeSong.currentTime = 0;
            
        }

        if(currentThemeSong && currentThemeSong === themeSong && !currentThemeSong.paused) {
            currentThemeSong.pause();
            updatePlayIcon(element ,false);
        }

        currentThemeSong = new Audio(themeSong);
        currentThemeSong.play();
        updatePlayIcon(element , true);

        slideLeftAndRightImages(duration);
    }

    function resetAllIcons() {
        // Reset icons for all elements (assuming play icon as default)
        characterSongtheme0.innerHTML = '<i class="fas fa-play"></i>';
        characterSongtheme1.innerHTML = '<i class="fas fa-play"></i>';
    }

    function updatePlayIcon(element, state) {
        resetAllIcons();
        element.innerHTML =  state ? '<i class="fas fa-redo rotate"></i>' : '<i class="fas fa-play"></i>';
    }

    function slideLeftAndRightImages(duration) {
        clearInterval(timeout);
        const leftImages = [...document.querySelectorAll('.stories-content .story .story-avatar img')];
        const rightImages = images.map(img => img.imgsrc).slice(1);
    
        if (leftImages.length === 0 || rightImages.length === 0) return;
    
        const leftImagePlaceholder = document.querySelector('.left-character');
        const rightImagePlaceholder = document.querySelector('.right-character');
        
        let currentIndex = 0;
    
        // Initial image display
        leftImagePlaceholder.style.backgroundImage = `url(${leftImages[currentIndex].src})`;
        rightImagePlaceholder.style.backgroundImage = `url(${rightImages[currentIndex]})`;
    
        // Set up the interval to change images every specified duration
        timeout = setInterval(function () {
            // Increment currentIndex and loop back to 0 if at the end of the array
            currentIndex = (currentIndex + 1) % Math.min(leftImages.length, rightImages.length);
            
            // Start fade-out and black-and-white effect
            leftImagePlaceholder.classList.remove('fade-in');
            rightImagePlaceholder.classList.remove('fade-in');
            
            leftImagePlaceholder.classList.add('dark-in');
            rightImagePlaceholder.classList.add('dark-in');
            
            // Update images after the transition starts
            setTimeout(() => {
                leftImagePlaceholder.style.backgroundImage = `url(${leftImages[currentIndex].src})`;
                rightImagePlaceholder.style.backgroundImage = `url(${rightImages[currentIndex]})`;
    
                // Start fade-in after a short delay
                setTimeout(() => {
                    leftImagePlaceholder.classList.add('fade-in');
                    rightImagePlaceholder.classList.add('fade-in');
                }, 50); // 50ms delay to ensure the dark-in effect is visible
    
            }, 1000); // Delay to allow for the dark-in effect to be visible before changing the image
    
            // Remove the dark-in effect after the transition
            setTimeout(() => {
                leftImagePlaceholder.classList.remove('dark-in');
                rightImagePlaceholder.classList.remove('dark-in');
            }, 2000); // Keep the dark-in effect for 2 seconds (adjust as needed)
            
        }, duration);
    
        currentThemeSong.onended = () => { clearInterval(timeout); resetAllIcons(); }
    }
     
    
    
    

    document.querySelector('.character-close').onclick = () => {
        resetAllIcons();
        if(currentThemeSong) {
            currentThemeSong.pause();
            currentThemeSong.currentTime = 0;
        }

        clearInterval(timeout);

        const leftImagePlaceholder = document.querySelector('.left-character');
        const rightImagePlaceholder = document.querySelector('.right-character');

        leftImagePlaceholder.style.backgroundImage = `url(logo2.jpg)`;
        rightImagePlaceholder.style.backgroundImage = `url(logo.jpg)`;

        document.querySelector('.characters-preview-overlay').style.display = 'none';
    }

    
    stories.forEach((story, index) => {
        const name = story.querySelector('h2').innerText; // Get the narrator's name
        const avatar = story.querySelector('.story-avatar img').src; // Get the avatar image source
        const paragraphs = Array.from(story.querySelectorAll('.fairy-tale p')).map(p => p.innerText); // Get all paragraphs in an array
        
       

        const readMoreBtn = story.querySelector('.read-story button');
        
        readMoreBtn.onclick = () => {

             // Create a currentStory object for the current story
            currentStory = {
                name: name,
                avatar: avatar,
                paragraphs: paragraphs,
                narrator: story.getAttribute("data-story") // Get the story audio file
            };

            narrateStory(currentStory);
        }
    });

    const narrateStory = function(currentStory) {

        // Stop previous audio if it's playing
        if (narratorAudio) {
            narratorAudio.pause();
            narratorAudio.currentTime = 0; // Reset to the beginning
        }

        // Update the UI
        document.querySelector('.header-text').innerHTML = `<h2>${currentStory.name}</h2>`;
        document.querySelector('.narration img').src = currentStory.avatar;
        
        // Display each paragraph as a separate <p> tag
        document.querySelector('.narration-text').innerHTML = currentStory.paragraphs.map(p => `<p>${p}</p>`).join('');


        document.querySelector('.narration-content').style.backgroundImage = `url(${currentStory.avatar})`;

        // Create a new Audio object
        narratorAudio = new Audio(currentStory.narrator);
        
        // Show the narration overlay
        document.querySelector('.narration-overlay').style.display = 'flex';

        // Play the audio
        narratorAudio.play();
    }



    document.querySelector('.narration-close').onclick = () => {
        document.querySelector('.header-text').innerHTML = '';
        document.querySelector('.narration img').src = "";
        document.querySelector('.narration-text').innerHTML = '';
        narratorAudio.pause();
        narratorAudio.currentTime = 0;
        document.querySelector('.narration-overlay').style.display = 'none';
    }


    function showCards () {
        document.querySelector('.content-character-view').innerHTML = '';

        const frontCardImages = [...document.querySelectorAll('.stories-content .story .story-avatar img')];
        const backCardImages = images.map(img => img.imgsrc).slice(1);
        const namesOfCharacters =  images.map(namme => namme.names).slice(1);
        const voices = [...document.querySelectorAll('.friends-section ul li .friend')];

        frontCardImages.forEach((img,index )=> {
            const imgcard = document.createElement('div');
            imgcard.classList.add("card");
            imgcard.style.backgroundImage = `url(${img.src})`;
            const  voice = new Audio(voices[index].getAttribute('data-voice'));

            document.querySelector('.content-character-view').appendChild(imgcard);

            let lastImageIndex = 0;

            setTimeout(function () {
               setInterval(function() {
                imgcard.style.backgroundImage = `url(${backCardImages[index]})`;
                lastImageIndex = index;

               }, index * 2000)
            },3000);


            imgcard.onclick = () => {
               playCurrentDecription(voice);
               recommendSong(backCardImages[index], img.src, namesOfCharacters[index]);

            }

            
        });
    }

    function  playCurrentDecription(voice) {
        if(currentAudioDescrption && currentAudioDescrption !== voice) {
            currentAudioDescrption.pause();
        }

        currentAudioDescrption = voice;
        currentAudioDescrption.currentTime = 0;
        currentAudioDescrption.play();

    }

    document.querySelector('.close-characters-view').onclick = function() {
        document.querySelector('.characters-view-overlay').style.display = 'none';
        if(!currentAudioDescrption.paused) {
            currentAudioDescrption.pause();
        }
    }

    const RPlay = document.querySelectorAll('.buttons-actions button')[0];
    const Rdone = document.querySelectorAll('.buttons-actions button')[1];

    function  recommendSong(leftImage, rightImage, name) {
        document.querySelector('.left-preview-recommendation').innerHTML = `<img src="${leftImage}" alt="Characters_img">`;
        document.querySelector('.right-preview-recommendation').innerHTML = `<img src="${rightImage}" alt="Characters_img">`;
        document.querySelector("#character-names").textContent = name;
        RPlay.innerHTML = "&#x2191;";
        document.querySelector('.recommendation-overlay').style.display = 'flex';
    
        shareItem.leftImg = leftImage;
        shareItem.rightImg = rightImage;
        shareItem.ImajinFriendname = name;
    }

    

    document.querySelector('.close-recomendation').onclick = function () {
        closeRecommendations()
    }

   function closeRecommendations () {
        document.querySelector('.recommendation-overlay').style.display = 'none';
        document.querySelector('.left-preview-recommendation').innerHTML = "";
        document.querySelector('.right-preview-recommendation').innerHTML = "";
        document.querySelector("#character-names").textContent = "";
        
        if(!currentAudioDescrption.paused) {
            currentAudioDescrption.pause();
        }

        pauseMedia(currentRecommendedSong);

        disableBtn(RPlay, true);
        disableBtn(Rdone, true);

        playSelected = false;
   }
   
    document.querySelector('#audioFileRecommendation').addEventListener('change', function () {

        if(!currentAudioDescrption.paused) {
            currentAudioDescrption.pause();
        }

        const file = this.files[0];
        
        if (file) {

             // Check if file size is greater than 10 MB
            const maxFileSizeMB = 10;
            const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024; // Convert MB to bytes

            if (file.size > maxFileSizeBytes) {
                alert("The audio file size must not exceed 10 MB.");
                return; // Exit the function if file is too large
            }

            disableBtn(RPlay, false);
            disableBtn(Rdone, false);
            if(currentRecommendedSong) {pauseMedia(currentRecommendedSong); playSelected = false;}
            RPlay.innerHTML = "&#9654;";

            const audiourl = URL.createObjectURL(file);
            const song = new Audio(audiourl);
            currentRecommendedSong = song;

            shareItem.songAudio = file;
            shareItem.songTitle = file.name.replace(".mp3", "");

            RPlay.onclick = () => {
                playSelected = !playSelected;

                if(playSelected) {
                    currentRecommendedSong.play();
                    RPlay.innerHTML = "&#10074;&#10074;";
                }
                else {
                    song.pause();
                    RPlay.innerHTML = "&#9654;";
                }
                

                currentRecommendedSong.onended = () => {RPlay.innerHTML = "&#9654;"; playSelected = false;}
            }
        }
    });

    Rdone.onclick = () => {
        closeRecommendations();
        showShareView();
    }


    function showShareView() {

        if(!currentAudioDescrption.paused) {
            currentAudioDescrption.pause();
            currentRecommendedSong.currentTime = 0;
            playSelected =  false;
            RPlay.innerHTML = "&#9654;";
        }


        if(shareItem.leftImg &&shareItem.rightImg && shareItem.ImajinFriendname && shareItem.songAudio && shareItem.songTitle ) {
            document.querySelector('.progress-bar-preview').style.width = '';
            document.querySelector('.leftside-preview').innerHTML = `<img src="${shareItem.leftImg}" alt="Characters_img">`;
            document.querySelector('.rightside-preview').innerHTML = `<img src="${shareItem.rightImg}" alt="Characters_img">`;
            document.querySelector('.audio-name').innerHTML = ` <h3>${shareItem.songTitle}</h3>`;
            document.querySelector('#statement').textContent = `${shareItem.ImajinFriendname ? `This song is recommended to ${shareItem.ImajinFriendname}` : "recommends this song for a friend"}`;
        
            document.querySelector('.share-recomendation-overlay').style.display = 'flex';


            document.querySelector('.audio-preview .icon button').onclick = function () {
                playSelected = !playSelected;
                
                if(playSelected) {

                   if(!currentRecommendedSong.paused) {
                        currentRecommendedSong = shareItem.songAudio;
                        currentRecommendedSong.currentTime = 0;
                        currentRecommendedSong.play();
                        this.innerHTML = "&#10074;&#10074;";
                   }
                   else{
                        currentRecommendedSong.play();
                        this.innerHTML = "&#10074;&#10074;";
                   }
                }

                else{

                    currentRecommendedSong.pause();
                    this.innerHTML = "&#9654;";
                }

                currentRecommendedSong.ontimeupdate = () => {
                    const percent = (currentRecommendedSong.currentTime / currentRecommendedSong.duration) * 100;

                    document.querySelector('.progress-bar-preview').style.width = `${percent}%`;
                }

                currentRecommendedSong.onended = () => {this.innerHTML = "&#9654;"; playSelected = false;}
            }
        }
        
    }

    const UserInfoBtn = document.querySelectorAll(".actions-share-controls button")[0];
    const postBtn = document.querySelectorAll(".actions-share-controls button")[1];

    function closeRecomShare() {

        document.querySelector('.share-recomendation-overlay').style.display = 'none';
        document.querySelector('.leftside-preview').innerHTML = ``;
        document.querySelector('.rightside-preview').innerHTML = ``;
        document.querySelector('.audio-name').innerHTML = ``;
        document.querySelector('#statement').textContent = `Has a recommendation for Imajin this song`;
        document.querySelector('.audio-preview .icon button').innerHTML = "&#9654;";
        document.querySelector('.progress-bar-preview').style.width = '';
        currentRecommendedSong.pause();
        document.querySelector('.image-user-preview').innerHTML = `<img src="logo.jpg" alt="user_image">`;
        document.querySelector('.name-input-user input').value = "";
        document.querySelector('.name-of-person h2').textContent = `Add your name`;
        document.querySelector('.user-profile').innerHTML = `<img src="logo2.jpg" alt="user">`;
        playSelected = false;
        postBtn.disabled = true;
    }


    document.querySelector(".close-share-recomendation").onclick = function () {
       closeRecomShare();
    }

    

    UserInfoBtn.onclick = function () {
        document.querySelector('.user-form-overlay').style.display = "flex";
        currentRecommendedSong.pause();
        document.querySelector('.audio-preview .icon button').innerHTML = "&#9654;";
        playSelected = false;
    }

    function closeUserForm(clear) {
        document.querySelector('.user-form-overlay').style.display = "none";
        
        if(shareItem.leftImg &&shareItem.rightImg && shareItem.ImajinFriendname && shareItem.songAudio && shareItem.songTitle && shareItem.userImage && shareItem.UserName) {
            disableBtn(postBtn, false);
        }
        else {
            disableBtn(postBtn, true);
        }

       if(!currentRecommendedSong.paused) {
            currentRecommendedSong.pause();
       }

      if(clear) {
        document.querySelector('.image-user-preview').innerHTML = `<img src="logo.jpg" alt="user_image">`;
        document.querySelector('.name-input-user input').value = "";
        document.querySelector('.name-of-person h2').textContent = `Add your name`;
        document.querySelector('.user-profile').innerHTML = `<img src="logo2.jpg" alt="user">`;
      }


    }

    postBtn.onclick = async function () {
        postBtn.disabled = true;
        
        function toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }
        
        const newPost = {
            leftImg: shareItem.leftImg,
            rightImg: shareItem.rightImg,
            ImajinFriendname: shareItem.ImajinFriendname,
            songAudio: shareItem.songAudio instanceof File ? await toBase64(shareItem.songAudio) : shareItem.songAudio,
            songTitle: shareItem.songTitle,
            userImage: shareItem.userImage instanceof File ? await toBase64(shareItem.userImage) : shareItem.userImage,
            UserName: shareItem.UserName,
        };
    
        fetch('https://imajin-backend.onrender.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log('Post added:', data);
            loadPosts(); // Refresh the feed to include the new post
           
        })
        .catch(error => console.error('Error:', error))
        .finally(() => {
            postBtn.disabled = false;
        });

        closeRecomShare();
    };
    

    document.querySelector('.close-user-form-overlay').onclick = function () {
        closeUserForm(true);
    }

    document.querySelectorAll('.controls-user-form button')[1].onclick = function () {
        closeUserForm(false);
    }

    document.querySelector('#imageFileInput').addEventListener('change',  function () {
        const file = this.files[0];
        document.querySelector('.image-user-preview').innerHTML = "";

        if(file) {
    

            shareItem.userImage = file;
            document.querySelector('.image-user-preview').innerHTML = `<img src="${URL.createObjectURL(shareItem.userImage)}" alt="user_image">`;

           

            updateDoneFormBtn();
        }

        
    });

    function updateDoneFormBtn() {
        const userNameInput = document.querySelector('.name-input-user input').value.trim();
        document.querySelectorAll('.controls-user-form button')[0].disabled = !(shareItem.userImage && userNameInput);
    }
    

    document.querySelector('.name-input-user input').addEventListener('input', function () {
        updateDoneFormBtn();
    });
    
    document.querySelectorAll('.controls-user-form button')[0].onclick = function () {
        this.disabled = true;
        

        shareItem.UserName = document.querySelector('.name-input-user input').value;

        document.querySelector('.name-of-person h2').textContent = `${shareItem.UserName}`;
        document.querySelector('.user-profile').innerHTML = `<img src="${URL.createObjectURL(shareItem.userImage)}" alt="user">`;
        closeUserForm(false);
       
    }


    postFeedIcon.onclick = () => {
        document.querySelector('.feed-overlay').style.display = "flex";
        loadPosts();
    }

    document.querySelector('.feed-close').onclick = function () {
        document.querySelector('.feed-overlay').style.display = "none";
        if(currentSongAudio) {
            currentSongAudio.pause();
        }
    }

    function createPostFeed (index, userPhoto, userFname,friendname,songTitlePost,friendPhoto,friendAvator,songAudio) {
        const newLiPost = document.createElement('li');

        const postHeader = document.createElement('div');
        postHeader.classList.add("post-header");
        newLiPost.appendChild(postHeader);


        const postNumber = document.createElement('div');
        postNumber.classList.add("post-number");
        postNumber.innerHTML = `<h1>${index}</h1>`;
        postHeader.appendChild(postNumber);

        const postTitle = document.createElement('div');
        postTitle.classList.add("post-title");
        postHeader.appendChild(postTitle);

        const postUserIcon = document.createElement('div');
        postUserIcon.classList.add("user-icon");
        postUserIcon.innerHTML = `<img src="${userPhoto}" alt="user_icon">`
        postTitle.appendChild(postUserIcon);

        const postUserName = document.createElement('div');
        postUserName.classList.add("userName-holder");
        postUserName.innerHTML = `<h3>${userFname} has a recommendation for ${friendname}: this song.</h3><p>${songTitlePost}</p>`;
        postTitle.appendChild(postUserName);

        const postBody = document.createElement('div');
        postBody.classList.add("post-body");

        postBody.innerHTML = `<div class="imajin-friend-image">
                                <img src="${friendPhoto}" alt="friend_image">
                            </div>

                            <div class="imajin-friend-avator">
                                <img src="${friendAvator}" alt="friend_image">
                            </div>`
        newLiPost.appendChild(postBody);

        // Create the play button in the footer
        const postFooter = document.createElement('div');
        postFooter.classList.add("post-footer");
        const playButton = document.createElement('button');
        playButton.innerHTML = "&#9654;"; // Play icon
        postFooter.appendChild(playButton);

         // Create progress elements
        const progressTrack = document.createElement('div');
        progressTrack.classList.add("progress-track-audio");
        const progressBarAudio = document.createElement('div');
        progressBarAudio.classList.add("progress-bar-audio");
        progressTrack.appendChild(progressBarAudio);
        postFooter.appendChild(progressTrack);

        newLiPost.appendChild(postFooter);

        document.querySelector('.feed-section ul').appendChild(newLiPost);


        // Event listener for play button
        playButton.onclick = () => {
            if (currentSongAudio && !currentSongAudio.paused) {
                // Pause the currently playing audio
                currentSongAudio.pause();
               playButton.innerHTML = "&#9654;"; // Reset previous button to play icon
                progressBarAudio.style.width = "0%"; // Reset previous progress bar
            }

            // Play the new audio
            playAudioFromBase64(songAudio, playButton, progressBarAudio);
        };

    }

    function playAudioFromBase64(songAudio, button, progressBar) {
        // Decode Base64 audio and create a Blob
        const base64Data = songAudio.split(',')[1];
        const binaryString = atob(base64Data);
        const byteArray = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        const audioBlob = new Blob([byteArray], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Play the new audio and set it as current
        currentSongAudio = new Audio(audioUrl);
        currentSongAudio.play();
        button.innerHTML = "<span>&#10074;&#10074;</span>"; // Change button to pause icon
        currentProgressBar = progressBar; // Update current progress bar
        isSongAudioPlaying = true;

        // Update progress bar as the audio plays
        currentSongAudio.addEventListener("timeupdate", () => {
            if (currentSongAudio.duration) { // Check if duration is valid
                const percentage = (currentSongAudio.currentTime / currentSongAudio.duration) * 100;
                progressBar.style.width = `${percentage}%`;
            }
        });

        // Clean up URL after playing to free resources
        currentSongAudio.onended = () => {
            button.innerHTML = "&#9654;"; // Reset button to play icon
            isSongAudioPlaying = false;
            progressBar.style.width = "0%"; // Reset progress bar
            URL.revokeObjectURL(audioUrl);
            currentSongAudio = null; // Clear the reference
            currentPlayingButton = null; // Clear the reference
            currentProgressBar = null; // Clear the reference
        };
    }
    
    
    // Fetch and display posts in the feed section
    function loadPosts() {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = 'block'; // Show spinner
    
        fetch('https://imajin-backend.onrender.com/posts')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(posts => {
                // Clear existing posts in the feed
                document.querySelector('.feed-section ul').innerHTML = '';
    
                // Populate feed with posts from JSON
                posts.forEach((post, index) => {
                    createPostFeed(
                        index + 1,
                        post.userImage,
                        post.UserName,
                        post.ImajinFriendname,
                        post.songTitle,
                        post.leftImg,
                        post.rightImg,
                        post.songAudio // Pass songAudio here
                    );
                });
            })
            .catch(error => console.error('Error loading posts:', error))
            .finally(() => {
                spinner.style.display = 'none'; // Hide spinner after loading
            });
    }
    
    

    // Call loadPosts() whenever you open the feed overlay
    document.querySelector('.feed-overlay').addEventListener('click', loadPosts);

});

//----------------------------------------------------------------------------------------------------------------------------------
