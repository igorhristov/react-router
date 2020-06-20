import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Category = () => {
    const { category } = useParams();

    return (
        <div>
            <header>
                <Header />
                <h1>{category}</h1>
            </header>
        </div>
    );
};

export default Category;
