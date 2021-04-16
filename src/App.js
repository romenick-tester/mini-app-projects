import React from 'react';
import Project1 from "./apps/completed/project017_random_person";
import Project2 from "./apps/project018_pagination";

function App() {
    const isCompleted = false;

    return isCompleted ? <Project1 /> : <Project2 />;
}

export default App;
