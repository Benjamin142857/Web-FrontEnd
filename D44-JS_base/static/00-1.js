window.onload = function () {
    var url = 'http://127.0.0.1:9000/test';
    var request = new XMLHttpRequest();
    request.onload = function () {
        if (request.status == 0) {
            displayContent(request.responseText);
        }
    };
    request.open("GET", url);
    request.send(null);
    alert(request.responseText);
}

function displayContent(content) {
    var p = $('#p1');
    p.innerHTML = content;
}