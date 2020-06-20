import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoApp from '../apps/TodoApp/App';

const TodoPage = () => {
    return (
        <div>
            <Header />

            <div className='App-main'>
                <h1>Todo page</h1>

                <TodoApp />
            </div>
            <Footer />
        </div>
    );
};

export default TodoPage;
