import React from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';

const Homepage = () => {
    return (
        <div>
            <Header />

            <main className='App-main'>
                <h1>hello from Articles page</h1>
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;
