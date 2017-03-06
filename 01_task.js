function task() {
    var notifications = {
        "type": "notification",
        "params": {
            "title": "Greeting",
            "message": "Hi, there"
        }
    }

    $.getJSON('file.json', function () {
        console.log('success!');
    }).done(function (data) {
        data.actions.push(notifications)
        data.actions.forEach(function (e) {
            if (e.params.action === "open-location") {
                e.params.action = null;
                delete e.params.link;
            }
        });
        // console.log(data);
        insertData(data);
    });
}

function insertData(text) {
    var result = JSON.stringify(text, undefined, 4);
    document.getElementById("textarea").value = result;
}

task(); 