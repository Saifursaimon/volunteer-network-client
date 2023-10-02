import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div>
            <div>
                <h1 className=' text-4xl text-center font-bold mt-20'>I grow by helping people in need.</h1>
            </div>
            <div className="join mt-6 w-full">
            <div className='mx-auto'>
                <div className='flex'> 
                <input className="input input-bordered join-item " placeholder="Search"/>
                <button className="btn btn-primary join-item ">Search</button>
                </div>
            </div>
            </div>

            <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-5 '>
                {
                    events.map(event => <Card event={event} key={event._id}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;