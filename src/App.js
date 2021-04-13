import React from 'react';
import Project1 from "./apps/completed/project015_cocktails"
import Project2 from "./apps/project016";

function App() {
    const isCompleted = false;

    return isCompleted ? <Project1 /> : <Project2 />;
}

export default App;
