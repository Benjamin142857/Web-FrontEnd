var obj = document.getElementById("p1");
console.log(obj.innerText);


var REQ = {
    url: "http://127.0.0.1:9000/test",
    type: "GET",
    dataType: "json",
    data: "a=" + obj.innerText,
    success: function (res) {
        console.log(res['info']);
        obj.innerText = res['info'];
    }
};

window.setInterval(function(){$.ajax(REQ)},1000);