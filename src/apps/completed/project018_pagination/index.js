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

    const nextPage = () => {
        setPage((state) => {
            let nextPage = state + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        })
    }

    const prevPage = () => {
        setPage((state) => {
            let prevPage = state - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        })
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
                        <button
                            type="button"
                            className="prev-btn"
                            onClick={prevPage}
                        >
                            prev
                        </button>
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
                        <button
                            type="button"
                            className="next-btn"
                            onClick={nextPage}
                        >
                            next
                        </button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Pagination;
