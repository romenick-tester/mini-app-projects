import React, { useState, useEffect } from 'react';
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import "./source/index.css";

function ToursApp() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const url = 'https://course-api.com/react-tours-project';
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setTours(data);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
            setLoading(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    function removeTour(id) {
        const newTours = tours.filter((item) => item.id !== id);
        setTours(newTours);
    }

    function resetHandler() {
        fetchData();
    }

    return (
        <main>
            {loading
                ? <Loading />
                : <Tours tours={tours} removeTour={removeTour} resetHandler={resetHandler} />
            }
        </main>
    )
}

export default ToursApp;
