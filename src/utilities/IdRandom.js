const IdRandom = (count=5) => {
    let simbols =
        ['a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p',
            'q', 'r', 's', 't',
            'u', 'v', 'w', 'x',
            'y', 'z','-', '!',
            '@', '$', '%', '/',
            '*','&','^','<','>',
            '~','#',':','?','.'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let id = '';
    for(let i = 0; i<=count; i++){
        id+= simbols[getRandomInt(simbols.length)]
    }
    return id
}
export default IdRandom