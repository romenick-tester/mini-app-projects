import React, { useState, useEffect } from "react";
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from "react-icons/fa";
import "./index.css";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function RandomPerson() {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const [title, setTitle] = useState("name");
    const [value, setValue] = useState("random person");

    const fetchRandomUser = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            const { results } = data;

            if (results) {
                const { phone, email } = results[0];
                const { large: image } = results[0].picture;
                const { login: { password } } = results[0];
                const { first, last } = results[0].name;
                const { dob: { age } } = results[0];
                const { street: { number, name } } = results[0].location;

                const newPerson = {
                    image,
                    phone, email, password, age,
                    street: number + " " + name,
                    name: first + " " + last
                }
                console.log(newPerson);
                setPerson(newPerson);
                setTitle("name");
                setValue(newPerson.name);
            } else {
                setPerson({});
            }

            setLoading(false);
        } catch (err) {
            console.error(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRandomUser();
    }, []);

    const handleValue = (e) => {

    }

    return (
        <main>
            <div className="block bcg-black"></div>
            <div className="block">
                <div className="container">
                    <img
                        src={(person && person.image) || defaultImage}
                        alt="random user"
                        className="user-img"
                    />
                    <p className="user-title"> my {title} is </p>
                    <p className="user-value"> {value} </p>
                    <div className="values-list">
                        <button
                            className="icon"
                            data-label="name"
                            onMouseOver={handleValue}
                        >
                            <FaUser />
                        </button>
                        <button
                            className="icon"
                            data-label="email"
                            onMouseOver={handleValue}
                        >
                            <FaEnvelopeOpen />
                        </button>
                        <button
                            className="icon"
                            data-label="age"
                            onMouseOver={handleValue}
                        >
                            <FaCalendarTimes />
                        </button>
                        <button
                            className="icon"
                            data-label="street"
                            onMouseOver={handleValue}
                        >
                            <FaMap />
                        </button>
                        <button
                            className="icon"
                            data-label="phone"
                            onMouseOver={handleValue}
                        >
                            <FaPhone />
                        </button>
                        <button
                            className="icon"
                            data-label="password"
                            onMouseOver={handleValue}
                        >
                            <FaLock />
                        </button>
                    </div>
                    <button type="button" className="btn" onClick={fetchRandomUser}>
                        {loading ? "loading..." : "random user"}
                    </button>
                </div>
            </div>
        </main>
    )
}

export default RandomPerson;