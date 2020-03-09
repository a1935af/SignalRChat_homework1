"use strict";
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (id) {
    if (document.getElementById(id).value == "可能") {
        document.getElementById(id).value = "不可";
        document.getElementById(id).className = "btn-danger";

    } else {
        document.getElementById(id).value = "可能";
        document.getElementById(id).className = "btn-success";
    };
    document.getElementById(id).disabled = false;
});

connection.start().then(function () {
}).catch(function (err) {
    return console.error(err.toString());
});

document.body.addEventListener("click", function (event) {
    var id = event.target.id;
    document.getElementById(id).disabled = true;
    connection.invoke("SendMessage", id).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});


