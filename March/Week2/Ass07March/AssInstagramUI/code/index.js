
function clicked(n) {
    if (n == 'home') {
        document.getElementById('home').style.display = "inline";
        document.getElementById('search').style.display = "none";
        document.getElementById('like').style.display = "none";
        document.getElementById('profile').style.display = "none";
        document.getElementById('video').style.display = "none";
    }
    else if (n == 'search') {
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "inline";
        document.getElementById('video').style.display = "none";
        document.getElementById('like').style.display = "none";
        document.getElementById('profile').style.display = "none";
    }
    else if (n == 'video') {
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('video').style.display = "initial";
        document.getElementById('like').style.display = "none";
        document.getElementById('profile').style.display = "none";
    }
    else if (n == 'like') {
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('video').style.display = "none";
        document.getElementById('like').style.display = "initial";
        document.getElementById('profile').style.display = "none";
    }
    else{
            document.getElementById('home').style.display = "none";
            document.getElementById('search').style.display = "none";
            document.getElementById('video').style.display = "none";
            document.getElementById('like').style.display = "none";
            document.getElementById('profile').style.display = "initial";
        }
}