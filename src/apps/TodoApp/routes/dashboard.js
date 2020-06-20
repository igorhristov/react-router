import React from 'react';
import Header from '../components/Header';

const Dashboard = ({ todos, categories, addTodo, deleteTodo }) => {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through',
    };
    return (
        <div>
            <Header {...{ categories, addTodo }} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard;
