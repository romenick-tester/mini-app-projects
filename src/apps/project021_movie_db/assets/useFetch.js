import { useState, useEffect } from "react";
import { API_ENDPOINT } from "./context";

const useFetch = (params) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        setLoading(true);

        const res = await fetch(url);
        const data = await res.json();

        if(data && data.Response === "True") {
            setData(data.Search || data);
            setError({ show: false, msg: "" });
        } else {
            setData([]);
            setError({ show: true, msg: data.Error });
        }
        
        setLoading(false);
    }

    useEffect(() => {
        fetchData(`${API_ENDPOINT}${params}`);
    }, [params]);

    return { loading, error, data };
}

export default useFetch;