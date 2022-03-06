
var counter_like = [0,0,0,0,0,0,0,0,0,0,0,0];
var counter_dislike = [0,0,0,0,0,0,0,0,0,0,0,0];

function like(n) {
    counter_like[n] += 1;
    render_like(n);
}

function dislike(n) {
    counter_dislike[n] += 1;
    render_dislike(n);
}

function render_like(n) {
    var display_like = document.getElementById(`op_text_like${n}`);
    display_like.innerHTML = counter_like[n];
}
function render_dislike(n) {
    var display_dislike = document.getElementById(`op_text_dislike${n}`);
    display_dislike.innerText = counter_dislike[n];
}