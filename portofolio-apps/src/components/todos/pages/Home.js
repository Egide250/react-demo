import React from 'react';
import todoStyle from '../layout/todoStyle.css';
import Header from './Header';
import Form from './Form'

function Home(){
    return(
        <div className='container'>
            <div className='app-wrapper'>
                <Header />
                <Form />
            </div>
        </div>
    )
}
export default Home
