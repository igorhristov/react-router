import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import Header from '../components/Header';

const Homepage = () => {
    return (
        <div>
            <Header />

            <main className='App-main'>
                <h1>hello from Authors page</h1>
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;