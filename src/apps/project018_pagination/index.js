import React, { useState, useEffect } from "react";
import useFetch from "./assets/useFetch";
import Follower from "./Follower";

import "./assets/index.css";

function Pagination() {
    const { loading, data } = useFetch();
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [loading/* !important */, data, page /* !important */]);

    const handlePage = (index) => {
        setPage(index);
    }

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
                {!loading && (
                    <div className="btn-container">
                        {data.map((_, index) => {
                            return (
                                <button
                                    type="button"
                                    className={`page-btn ${index === page && "active-btn"}`}
                                    key={index}
                                    onClick={() => handlePage(index)}
                                >
                                    {index + 1}
                                </button>
                            )
                        })}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Pagination;
