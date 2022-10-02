import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCount = new AbortController();

        fetch(url, { signal: abortCount.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Can not find data from server")
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message)
                    setIsLoading(false)
                }
            })

        return () => abortCount.abort();
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;