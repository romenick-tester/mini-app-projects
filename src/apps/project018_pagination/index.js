import React, { useState, useEffect } from "react";
import useFetch from "./assets/useFetch";
import Follower from "./Follower";

import "./assets/index.css";

function Pagination() {
    const { loading, data: followers } = useFetch();

    return (
        <main>
            <div className="section-title">
                <h1>{loading ? "loading..." : "pagination"}</h1>
                <div className="underline"></div>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />
                    })}
                </div>
            </section>
        </main>
    )
}

export default Pagination;
