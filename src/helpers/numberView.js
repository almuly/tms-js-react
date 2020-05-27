export default function (num) {
    const regDelimiter = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
    return num.toFixed(2).replace(regDelimiter, ',');
}