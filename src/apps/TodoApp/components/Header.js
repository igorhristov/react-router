import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ categories, addTodo }) => {
    const [title, setTitle] = useState('');

    const onAddTodo = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    };

    return (
        <div>
            <header>
                <NavLink className='app-link' to='/'>
                    Dashboard
                </NavLink>

                {categories.map((category) => (
                    <NavLink key={category.slug} className='App-link' to={category.slug}>
                        {category.title}
                    </NavLink>
                ))}
            </header>

            <form onSubmit={onAddTodo}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit'> Add Todo</button>
            </form>
        </div>
    );
};
export default Header;
