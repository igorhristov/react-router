import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from './data';
import Dashboard from './routes/dashboard';
import Category from './routes/category';

const TodoApp = () => {
    const [todos, setTodos] = useState(data.todos);
    const [categories, setCategories] = useState(data.categories);
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                completed: false,
                category: 'personal',
                title,
            },
        ]);
    };
    return (
        <Router>
            <Switch>
                <Route exact path='/todo/'>
                    <Dashboard
                        todos={todos}
                        categories={categories}
                        deleteTodo={deleteTodo}
                        addTodo={addTodo}
                    />
                </Route>
                <Route path='/todo/:category'>
                    <Category todos={todos} categories={categories} />
                </Route>
            </Switch>
        </Router>
    );
};

export default TodoApp;
