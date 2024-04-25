export const styleNumber = (number) => {
    if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    return 0
}

export  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const day = date.toLocaleDateString('en-GB');
    return `${day}`;
};