function debounce(fc: Function, delay: number) {
    let intervalId: any;

    return () => {
        clearInterval(intervalId);
        intervalId = setTimeout(fc, delay)
    }
}

export default debounce