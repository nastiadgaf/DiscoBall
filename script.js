const ball = $('#ball');
let timer = setInterval(function(){
    let maxWidth = $(window).width();
    let maxHeight = $(window).height();
    let height = `${getRandomArbitrary(1, maxHeight - 100)}px`;
    let width = `${getRandomArbitrary(1, maxWidth - 100)}px`;
    let borderColor = getRandomColor();
    ball.animate({
        top: height,
        left: width,
        backgroundColor: `#${getRandomColor()}`,
        borderTopColor: `#${borderColor}`,
        borderBottomColor: `#${borderColor}`,
        borderRightColor: `#${borderColor}`,
        borderLeftColor: `#${borderColor}`,
        boxShadow: `0px 0px 16px 14px rgba(${getRandomShadowColor()}, 0.54)`
    }, 1000)
}, 1000);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomShadowColor() {
    const getRandomRGB = () => Math.floor(Math.random() * 256);
    let shadowColor = `${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()}`;
    return shadowColor;
}