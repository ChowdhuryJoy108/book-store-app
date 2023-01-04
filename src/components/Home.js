import React from 'react';
import Books from './Book/Books';
import Banner from '../components/Banner';
// import Contact from './Contact';
import NewPublish from './NewPublish';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className='container'>
                <h2 style={{textAlign:'center',
                       marginTop:'15px',
                       color:'black',
                       fontWeight:'bold'
                }}>Our Services</h2>
                <Books />
            </div>
            <div className='container'>
               <NewPublish />
            </div>

            <div className='footer'>
                <Footer />
            </div>
           
        </div>
    );
};

export default Home;