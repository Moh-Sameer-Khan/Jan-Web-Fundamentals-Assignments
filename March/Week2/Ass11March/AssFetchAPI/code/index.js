// here are getting image Via API
// here are converting into object
const convert_to_json = function(response) {
    return response.json();
}
// function for creating image from API
const handle_trend =        function(res) {
    const user_arr = res.data;
    const container_img = document.getElementById('container');
    for (var i = 0; i < res.data.length; i += 1){
        const single = user_arr[i];
        const new_img = document.createElement('img');
        new_img.src = single.images.original.url;
        container_img.appendChild(new_img)
    }
}

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=vM4XFmbhzOELa3vTGaTtEmQSdi2KWx54`).then(convert_to_json).then(handle_trend);

//Here are searching 

const handle_search = function(search_response) {

    var image_el = document.getElementById('search-image');
    var image_e = search_response.data[0].images.original.url;
    var img_c = document.createElement("img");
    img_c.setAttribute("src", image_e);
    document.body.appendChild(img_c);
    console.log(search_response.data[0].images.original.url);
}

const search_fn = function() {
    // this will fetch and search
    const input = document.getElementById('input-text');
    const user_id = input.value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=vM4XFmbhzOELa3vTGaTtEmQSdi2KWx54&q=${user_id}`).then(convert_to_json).then(handle_search);
}

// button here
const btn = document.getElementById('search-btn');
btn.addEventListener('click', search_fn);