export const extractFormData = (form) => {
    const data = {};

    console.log(form);

    for(const input of new FormData(form).entries()) {
        data[input[0]] = input[1];
    }

    return data;
}

export const convertFormatText = (text) => {
    return text.split('\n').map((value, index) => <span key={index}> {value} <br /> </span>);
}