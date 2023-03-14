import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// This component is the home page component which will render all pages. 

function DocumentList() {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('/pages')
            .then(res => res.json())
            .then(data => setTitles(data.titles))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='container text-center w-75'>
            <h1 className='text-white'>Documents</h1>
            <div className='row'>
            {titles.map((title, index) => (
                <div key={title} className='card mb-3'>
                    <h2>{title}</h2>
                    <Link className='btn major w-25 mx-auto mb-2' to={`/pages/${index + 1}`}>View Document</Link>
                </div>
             ))}

            </div>
        </div>
    );
}

export default DocumentList;
