// bai 1
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var datetime = "Date : " + date + "<br>" + "Time : " + time;
document.getElementById('date_time').innerHTML = datetime;
//bai 2
var date_firstformat = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
    date_secondformat = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
    date_nextformat = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear(),
    date_lastformat = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

var date_fullformat = date_firstformat + "<br>" + date_secondformat + "<br>" +
    date_nextformat + "<br>" + date_lastformat;
document.getElementById('dateformat').innerHTML = date_fullformat;
//bai3
function submitbai3Form(event) {
    event.preventDefault();
    var data = event.target['name'].value;
    if (data != "") {
        for (let i = 0; i < data.length; i++) {
            let postion_datachar = data.charCodeAt(i);
            if (postion_datachar < 48 || postion_datachar > 57) {
                data = "EROR";
            } else {
                if (i < data.length - 1) {
                    let postion_datachar_next = data.charCodeAt(i + 1);
                    if (postion_datachar > postion_datachar_next) {
                        data = "EROR";
                    }
                }
            }
        }
    } else {
        data = "EROR";
    }
    if (data != "EROR") {
        data = "TRUE";
    }
    document.getElementById('result_3').innerHTML = data;
}
//bai4
function submitbai4Form(event) {
    event.preventDefault();
    var data = event.target['name'].value;
    var result = "";
    if (data == "") {
        data = "EROR";
    } else {
        for (var i = 0; i < data.length; i++) {
            let postion_text = data.charCodeAt(i);
            result += String.fromCharCode(postion_text + 1);
        }
        data = result;
    }
    document.getElementById('result_4').innerHTML = data;
}
//bai 5
function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1,
        k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

function submitbai5Form(event) {
    event.preventDefault();
    var data = event.target['name'].value;
    if (data == "" || data.length < 3 || data.length % 2 == 0) {
        data = "EROR";
    } else {
        var array = [];
        var start = parseInt(data.length / 2);
        for (var i = start; i < start + 3; i++) {
            array.push(data[i - 1]);
        }
        data = permute(array);
        var first = 0;
        var i = first + 1;
        while (i < data[i].length) {
            if (data[first][i] == data[first][first]) {
                i++;
            } else break;
        }
        if (i == data[i].length) {
            var finish = [];
            finish[0] = "";
            for (let j = 0; j < data[i].length; j++) {
                finish[0] += data[0][j];
            }
            data = finish;
            document.getElementById('result_5').innerHTML = data;
            return;
        }
        var finish = [];
        for (let i = 0; i < data.length; i++) {
            finish[i] = "";
            for (let j = 0; j < data[i].length; j++) {
                finish[i] += data[i][j];
            }
        }
        for (let i = 0; i < finish.length - 1; i++) {
            for (let j = i + 1; j < finish.length; j++) {
                if (finish[j] == finish[i]) {
                    finish.splice(j, 1);
                }
            }
        }
        data = finish;
    }
    document.getElementById('result_5').innerHTML = data;
}
//bai 6
function submitbai6Form(event) {
    event.preventDefault();
    var data = event.target['name'].value;
    if (data == "") {
        data = "EROR";
        document.getElementById('result_6').innerHTML = data;
        return;
    }
    //cat cac phan tu trong chuoi thanh cac mang
    var array = [],
        t = 0;
    array[t] = "";
    for (let i = 0; i < data.length; i++) {
        let postion_datachar = data.charCodeAt(i);
        if ((postion_datachar >= 48 && postion_datachar <= 57) || (postion_datachar == 32)) {
            if (postion_datachar !== 32) {
                array[t] += data[i];
            } else {
                t++;
                array[t] = "";
                continue;
            }
        } else {
            data = "EROR";
            document.getElementById('result_6').innerHTML = data;
            return;
        }
    }
    //truong hop mang chi co 1 phan tu
    if (array.length == 1) {
        document.getElementById('result_6').innerHTML = array;
        return;
    }
    //xoa cac phan tu trung nhau
    let result = array.sort().reduce((accumulator, current) => {
        const length = accumulator.length
        if (length === 0 || accumulator[length - 1] !== current) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    //truong hop co nhieu mang nhung cac element bang nhau
    if (result.length == 1) {
        document.getElementById('result_6').innerHTML = result;
        return;
    }
    //dem cac phan tu khac nhau
    var resultItem = [];
    for (let i = 0; i < result.length; i++) {
        const found = array.filter(element => element == result[i]);
        resultItem[i] = found.length;
    }
    var max = resultItem[0];
    for (let i = 1; i < resultItem.length; i++) {
        if (resultItem[i] > max) {
            max = resultItem[i];
        }
    }
    var total = [];
    for (let i = 0; i < resultItem.length; i++) {
        if (resultItem[i] == max) {
            total.push(result[i]);
        }
    }
    document.getElementById('result_6').innerHTML = total;
}
// bai 7
function submitbai7Form(event) {
    event.preventDefault();
    var data = event.target['name'].value;
    for (let i = 0; i < data.length - 3; i++) {
        if ((data[i] == "j") && (data[i + 1] == "a")) {
            if ((data[i + 2] == "v") && (data[i + 3] == "a")) {
                document.getElementById('result_7').innerHTML = "TRUE";
                return;
            } else continue;
        } else continue;
    }
    document.getElementById('result_7').innerHTML = "FALSE";
}
//bai8
function submitbai8Form(event) {
    event.preventDefault();
    var array = ['một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười', 'mười một', 'mười hai'];
    var val = event.target['name'].value;
    if (val > 12 || val == "") {
        document.getElementById('result_8').innerHTML = "EROR";
        return;
    } else {
        for (let i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > 57) {
                document.getElementById('result_8').innerHTML = "EROR";
                return;
            }
        }
    }
    document.getElementById('result_8').innerHTML = "tháng" + " " + array[val - 1];
}
//bai 9
function submitbai9Form(event) {
    event.preventDefault();
    var val = event.target['name'].value;
    if (val == "") {
        document.getElementById('result_9').innerHTML = "EROR";
        return;
    }

    function longestWord(str) {
        str = str.replace(/[^A-Za-z\s]/g, " ");
        var maxoffset = 0,
            maxlen = 0,
            wordoffset = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                wordoffset = i + 1;
            }
            if (i - wordoffset + 1 > maxlen) {
                maxoffset = wordoffset;
                maxlen = i - wordoffset + 1;
            }
        }
        // console.log(maxoffset);
        // console.log(maxoffset + maxlen);
        var maxoffset = 0,
            wordoffset = 0,
            array = [];
        for (var i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                wordoffset = i + 1;
            }
            if (i - wordoffset + 1 == maxlen) {
                maxoffset = wordoffset;
                array.push(str.substring(maxoffset, maxoffset + maxlen));
            }
        }
        // return str.substring(maxoffset, maxoffset + maxlen);
        return array;
    }
    document.getElementById('result_9').innerHTML = longestWord(val);
}
//bai 10
function check(event) {
    if (event == 2) return true;
    if (event < 2) return false;
    for (var i = 2; i <= Math.floor(Math.sqrt(event)); i++) {
        if (event % i == 0) {
            return false;
        }
    }
    return true;
}

function submitbai10Form(event) {
    event.preventDefault();
    var val = event.target['name'].value;
    if (val.charCodeAt(0) == 32) {
        document.getElementById('result_10').innerHTML = "EROR";
        return;
    }
    var dem = 0,
        array = [];
    for (let i = 0; i < val.length; i++) {
        if (!((val.charCodeAt(i) >= 48) && (val.charCodeAt(i) <= 57) || val.charCodeAt(i) == 32)) {
            document.getElementById('result_10').innerHTML = "EROR";
            return;
        } else if (val.charCodeAt(i) == 32) {
            dem++;
            array.push(val.substring(0, i));
            array.push(val.substring(i + 1, val.length));
        }
        if (dem > 1) {
            document.getElementById('result_10').innerHTML = "EROR";
            return;
        }
    }

    var start = parseInt(array[0]),
        end = parseInt(array[1]);
    var result = [];
    for (let i = start + 1; i < end; i++) {
        if (check(i)) {
            result.push(i);
        }
    }
    document.getElementById('result_10').innerHTML = result;
}