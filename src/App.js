import React from 'react';
import Project1 from "./apps/completed/project016_markdown_preview";
import Project2 from "./apps/project017";

function App() {
    const isCompleted = true;

    return isCompleted ? <Project1 /> : <Project2 />;
}

export default App;
