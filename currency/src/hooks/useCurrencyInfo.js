import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        // API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => {
                console.error("Failed to fetch currency data:", err);
                setData({});
            });
    }, [currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;