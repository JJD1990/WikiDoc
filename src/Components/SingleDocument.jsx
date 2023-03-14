import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RevisionList from './RevisionList';

function SingleDocument() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/pages/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch(error => console.error(error));
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className='container text-center w-75'>
      <h1 className='card-header'>{title}</h1>
      <div className='card mx-auto mb-3'>
        <div className='card-body'>{content}</div>
      </div>
      <Link to={`/pages/${id}/add-revision`} className='btn major'>Add Revision</Link>
      <button className='btn btn-secondary m-2' onClick={() => navigate(-1)}>Back</button> 
      <br />
      <RevisionList />
    </div>
  );
}

export default SingleDocument;
