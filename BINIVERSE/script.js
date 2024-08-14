var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var videoIndex = 1;
showVideoSlides(videoIndex);

function plusVideoSlides(n) {
    showVideoSlides(videoIndex += n);
}

function currentVideoSlide(n) {
    showVideoSlides(videoIndex = n);
}

function showVideoSlides(n) {
    var i;
    var videoSlides = document.getElementsByClassName("myVideos");
    var dots = document.getElementsByClassName("video-dot");
    if (n > videoSlides.length) { videoIndex = 1; }
    if (n < 1) { videoIndex = videoSlides.length; }
    for (i = 0; i < videoSlides.length; i++) {
        videoSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    videoSlides[videoIndex - 1].style.display = "block";
    dots[videoIndex - 1].className += " active";
}

let profileIndex = 0;
showProfileSlides(profileIndex);

function plusProfileSlides(n) {
    showProfileSlides(profileIndex += n);
}

function currentProfileSlide(n) {
    showProfileSlides(profileIndex = n - 1);
}

function showProfileSlides(n) {
    let profiles = document.getElementsByClassName("myProfile");
    let dots = document.getElementsByClassName("profile-dot");
    if (n >= profiles.length) { profileIndex = 0 }
    if (n < 0) { profileIndex = profiles.length - 1 }
    for (let i = 0; i < profiles.length; i++) {
        profiles[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    profiles[profileIndex].style.display = "block";
    dots[profileIndex].className += " active-dot";
}

document.addEventListener('DOMContentLoaded', function() {
  var albums = document.getElementsByClassName('album');
  for (var i = 0; i < albums.length; i++) {
      var album = albums[i];
      var audio = album.querySelector('audio');
      var playIcon = album.querySelector('.play-icon');

      playIcon.addEventListener('click', function() {
          if (audio.paused) {
              audio.currentTime = 0;
              audio.play();
          } else {
              audio.pause();
          }
      });
      audio.addEventListener('ended', function() {
          audio.currentTime = 0;
      });
  }
});

function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    
    if (audio.paused) {
        audio.play();
        document.querySelector('.play-button.active').classList.remove('active');
        event.target.classList.add('active');
        event.target.textContent = 'Pause Song';
    } else {
        audio.pause();
        event.target.textContent = 'Play Album';
        event.target.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
