import React from 'react';
import Project1 from "./apps/completed/project016_markdown_preview";
import Project2 from "./apps/project017_random_person";

function App() {
    const isCompleted = false;

    return isCompleted ? <Project1 /> : <Project2 />;
}

export default App;
