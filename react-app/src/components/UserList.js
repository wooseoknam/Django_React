// 클라이언트 측
// import React from "react";
// import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Pagination from "./Pagination";
// import UserSearch from "./UserSearch";

// export default function UserList() {
//     const users = useFetch(`http://127.0.0.1:8000/api/all`);
//     const [page, setPage] = useState(1);
//     const offset = (page - 1) * 10;

//     return (
//         <>
//             <ul>
//                 {users.slice(offset, offset + 10).map(user => (
//                     <li key={user.id}>
//                         <Link to={`/users/${user.id}`}>{user.name}</Link>
//                     </li>
//                 ))}
//             </ul>
//             <div>
//                 <Pagination
//                     total={users.length}
//                     page={page}
//                     setPage={setPage}
//                 />
//             </div>
//             <div>
//                 <UserSearch users={users}/>
//             </div>
//         </>
//     )
// }





// 서버측
import React, { useEffect, useState } from "react";
import Pagination from 'react-js-pagination';
import { Link } from "react-router-dom";

export default function Paging() {
    const [users, setUsers] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page);
    }, [page]);

    function fetchData(page) {
        fetch(`http://127.0.0.1:8000/api/?page=${page}`)
            .then(res => res.json())
            .then(data => {
            setUsers(data.results);
            setTotalCount(data.count);
        });
    }

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="paging">
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={totalCount}
                    pageRangeDisplayed={5}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
};