import React from 'react';
import Project1 from "./apps/completed/project015_cocktails"
import Project2 from "./apps/project015_cocktails";

function App() {
    const isCompleted = true;

    return isCompleted ? <Project1 /> : <Project2 />;
}

export default App;
