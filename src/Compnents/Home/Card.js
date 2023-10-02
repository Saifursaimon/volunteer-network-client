import React from 'react';

const Card = ({event}) => {
   const {_id,img,name,color} = event
  
    return (

      <div style={{backgroundImage:`url(${img})`}} className='bg-cover w-72 h-80 mx-auto relative rounded-b-xl bg-gree'>
        <h1 className={`absolute bottom-0 text-white bg-${color}-500 p-5 w-full text-center font-semibold rounded-b-xl`}>{name}</h1>
      </div>
    
    );
};

export default Card;