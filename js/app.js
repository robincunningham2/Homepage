
if (typeof document == 'undefined') {
    throw new Error('Didn\'t find document object.');
}

const bgc = 4;

let random = Math.floor(Math.random() * bgc) + 1;
const url = `_backgrounds/bg${random}.jpg`;

$('.background').css({
    'background-image': `url('${url}')`
});

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

$(document).on('keypress', (e) => {
    if (e.which == 13) { // Check for enter key
        const input = $('#search').val();
        open(`https://www.google.com/search?q=${input}`, '_self');
    }
});
