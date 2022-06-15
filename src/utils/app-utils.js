export const updateAddressSelection = (data, index) => {
    return data.reduce((acc, iter, i) => {
        if (i === index) {
            acc.push({ ...iter, city: `(Delivery Location): ${iter.city}` })
        } else {
            acc.push(iter);
        }
        return acc;
    }, []);
}