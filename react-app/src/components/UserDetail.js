import { useParams } from 'react-router-dom';
import useFetch  from '../hooks/useFetch';
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserDetail() {
    const {user_id} = useParams();
    const user = useFetch(`http://127.0.0.1:8000/api/${user_id}`)

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link to="/users" className="link">사용자 목록</Link>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <img src={user.image} alt={user.name} />
        </div>
    );
}