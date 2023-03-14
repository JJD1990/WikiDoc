import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// this component will render the list of past revisions, a user will be able to view revisions based on their created_at dates. 

function RevisionList() {
  const { id } = useParams();
  const [revisions, setRevisions] = useState([]);

  useEffect(() => {
    axios.get(`pages//${id}/revisions`)
      .then(response => {
        setRevisions(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className='card w-75 mx-auto mt-5'>
      <h2 className='card-header'>Revisions</h2>
      <ul className='list-group list-group-flush'>
        {revisions.map(revision => (
          <li key={revision.id} className='list-group-item'>
            <a href={`/pages/${id}/revision/${revision.id}`}>{revision.title} | {revision.content} | {revision.created_at}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RevisionList;
