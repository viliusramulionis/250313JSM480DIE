export const digit = 9999999999;

export const replaceAllSpaces = (string, replacement) => {
    return string.replaceAll(' ', replacement);
}

export const capitalizeWords = (text) => {
    return text.split(' ')
                .map(value => value[0].toUpperCase() + value.slice(1))
                .join(' ');
}

export default digit;