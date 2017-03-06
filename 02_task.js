function underscoreTask1() {
    var result = [];
    $.getJSON('file.json', function (data) {
        result = _.map(data.actions, function (item) {
            return item.type;
        });
        console.log(result);
    });
}

function underscoreTask2() {
    var obj = {};
    $.getJSON('file.json', function (data) {
        result = _.each(data.actions, function (item) {
            obj[item.type] = item.params;
        });
        console.log(obj);
    });
}

function underscoreTask3() {
    var arr = ["0", 2, 4, 6, null, [], 8, 10];

    var sum = _.chain(arr)
        .filter(function (item) { return typeof item === "number"; })
        .reduce(function (a, b) { return a + b; }, 0)
        .value();

    var avg = sum / arr.length;

    console.log("SUM: " + sum);
    console.log("AVG: " + avg);
}


// underscoreTask1();
// underscoreTask2();
// underscoreTask3();

/*
 * Question:
 * In the above task, what would happen if there were two actions of a same type?
 *
 * Answer:
 * Keys in JS objects must be unique.
 * What happens, is:
 *
 *  var obj = {
 *      key : value1
 *  }
 *
 *  sets obj['key'] to value1.
 *
 *  The subsequent declaration of key : value2 overwrites your previous one.
 */