
if (typeof document == 'undefined') {
    throw new Error('Didn\'t find document object.');
}

const bgc = 4;

let random = Math.floor(Math.random() * bgc) + 1;
const url = `_backgrounds/bg${random}.jpg`;

$('.background').css({
    'background-image': `url('${url}')`
});

const Storage = {
    data: () => {
        let data = {};
        for (let i = 0; localStorage.key(i) != null; i++) {
            const key = localStorage.key(i),
                item = localStorage.getItem(key);
            
            data[key] = JSON.parse(item);
        }

        data['_length'] = localStorage.length;
        return data;
    },
    set: (key, data) => {
        if (typeof key != 'string')
            throw new TypeError(`Cannot convert type ${typeof key} to string`);
        
        data = JSON.stringify(data);
        return localStorage.setItem(key, data);
    },
    get: (key) => {
        if (typeof key != 'string')
            throw new TypeError(`Cannot convert type ${typeof key} to string`);
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    },
    delete: (key) => {
        if (typeof key != 'string')
            throw new TypeError(`Cannot convert type ${typeof key} to string`);
        return localStorage.removeItem(key);
    },
    clear: () => {
        return localStorage.clear();
    }
};

if (!Storage.get('init')) {
    Storage.clear();
    Storage.set('init', true);
}

const getTime = () => {
    const now = new Date();
    let hours = `${now.getHours()}`;
    let minutes = `${now.getMinutes()}`;
    let seconds = `${now.getSeconds()}`;

    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
};

const getDate = () => {
    const now = new Date();
    let year = `${now.getFullYear()}`;
    let month = `${now.getMonth() + 1}`;
    let day = `${now.getDate()}`;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${year} · ${month} · ${day}`;
};

const timeCallback = () => {
    $('#time').html(getTime());
    $('#date').html(getDate());
    setTimeout(timeCallback, 100);
};

timeCallback();

const pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');

$(document).on('keypress', (e) => {
    if (e.which == 13) { // Check for enter key
        let input = $('#search').val();
        let islink = !!pattern.test(input);

        if (islink) {
            if (!input.split('//')[0].endsWith(':')) input = 'http://' + input;
            open(input, '_self');
        } else open(`https://www.google.com/search?q=${input}`, '_self');
    }
});
