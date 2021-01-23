
if (typeof document == 'undefined') {
    throw new Error('Didn\'t find document object.');
}

const bgc = 1;

let random = Math.floor(Math.random() * bgc) + 1;
const url = `_backgrounds/bg${random}.jpg`;

$('.background').css({
    'background-image': `url('${url}')`
});
