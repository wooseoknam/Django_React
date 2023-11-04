import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserSearch({ users }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('name');

    const handleSearchTerm = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSearchBy = (e) => {
      setSearchBy(e.target.value);
    };

    const filtered = users.filter(user =>
      (searchBy === 'name' && searchTerm !== '' && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (searchBy === 'age' && (Number(searchTerm) === user.age))
    );

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearchTerm} />
            <div>
                <label>
                    <input type="radio" value="name" checked={searchBy === 'name'} onChange={handleSearchBy} />
                    Name
                </label>
                <label>
                    <input type="radio" value="age" checked={searchBy === 'age'} onChange={handleSearchBy} />
                    Age
                </label>
            </div>
            <ul>
                {filtered.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}