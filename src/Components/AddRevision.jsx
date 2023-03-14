import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// This component will allow a user to create a new revision. Scope to push this to the latest revision on submitting. 

function AddRevision() {
  const { id } = useParams(); // use this to find the relevant page
  const [title, setTitle] = useState(''); // use this to set the state for each individual page/title
  const [content, setContent] = useState(''); // use this to set the state for each individual page content (needs altering to accept the content of each revision within the wiki.py)

  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`/pages/${id}`) //fetch the page
    .then(response => response.json())
    .then(data => {
      setTitle(data.title);
      setContent(data.content);
    })
    .catch(error => console.error(error));
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const revision = { title, content };

    axios.post(`/pages/${id}/add-revision`, revision) //check endpoint
      .then(response => {
        console.log(response.data);
        Navigate.push(`/post/${id}`);

      })
      .catch(error => console.error(error));
  };

  return (
    <div className='card mx-auto text-center w-75'>
    <h1 className='card-header'>Add Revision</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group w-75 mx-auto">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group w-75 mx-auto">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="form-control"
        />
      </div>
      <button className='btn major m-2' type="submit">Submit</button>
      <button className='btn btn-secondary m-2' onClick={() => Navigate(-1)}>Back</button> 
    </form>
  </div>
  
  );
}

export default AddRevision;
