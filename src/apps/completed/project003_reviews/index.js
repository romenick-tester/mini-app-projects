import React from "react";
import Review from "./components/Review";
import "./source/index.css"

function Reviews() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviewers</h2>
                    <div className="underline"></div>
                </div>
                <Review />
            </section>
        </main>
    )
}

export default Reviews;