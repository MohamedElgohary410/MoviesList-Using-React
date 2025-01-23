import React, { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);
            try {
                let response = await fetch(url);
                setData(await response.json());
                setIsLoading(false);
                setErrors(null);
            } catch (error) {
                setIsLoading(false);
                setErrors(error);
            }
        };

        fetchAllData();
    }, [url]);

    return { data, isLoading, errors };
}
