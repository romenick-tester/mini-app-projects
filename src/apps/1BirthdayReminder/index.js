import React from 'react';
import List from "./components/List";
import data from "./source/data";
import "./source/index.css";

function BirthdayReminder() {
    const [people, setPeople] = React.useState(data);

    function removePerson(id) {
        const newList = people.filter((person) => person.id !== id);
        setPeople(newList);
    }

    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays today</h3>
                <List people={people} removePerson={removePerson} />
                {people.length > 0 ? (
                    <button onClick={() => setPeople([])}>Clear All</button>
                ) : (
                        <button onClick={() => setPeople(data)}>Reset</button>
                    )}
            </section>
        </main>
    )
}

export default BirthdayReminder;
