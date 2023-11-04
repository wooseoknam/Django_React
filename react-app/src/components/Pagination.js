import React from "react";

export default function Pagination({ total, page, setPage }) {
    const numPages = Math.ceil(total / 10);
  
    return (
        <>
            <button onClick={() => setPage(1)} disabled={page === 1}>&lt;</button>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <button key={i + 1} onClick={() => setPage(i + 1)}>{i + 1}</button>
                    ))}
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
            <button onClick={() => setPage(numPages)} disabled={page === numPages}>&gt;</button>
        </>
    );
  }
  