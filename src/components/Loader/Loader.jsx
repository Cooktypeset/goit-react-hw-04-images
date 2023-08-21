import React from 'react';
import { Circles } from 'react-loader-spinner';
// import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={CSS.spinner}>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                arialabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible = {true}
            />
       </div>
   ) 
}