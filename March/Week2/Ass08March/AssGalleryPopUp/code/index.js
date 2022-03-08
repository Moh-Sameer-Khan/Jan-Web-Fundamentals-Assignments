function clicked() {
    document.getElementById('pop').classList.replace('popup','d-none');
}
function show(n) {
    document.getElementById('pop').classList.replace('d-none','popup');
    document.getElementById('temp').src = document.getElementById(`img${n}`).src;
    document.getElementById('temp').src = document.getElementById(`img${n}`).src;
}