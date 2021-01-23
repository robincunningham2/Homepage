
if (typeof document == 'undefined') {
    throw new Error('Didn\'t find document object.');
}

const bgc = 2;

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

const timeCallback = () => {
    const now = new Date();
    $('#time').html(getTime());
    setTimeout(timeCallback, 100);
};

timeCallback();
