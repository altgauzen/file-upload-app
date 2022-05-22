import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');

  const handleChange = event => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <section id="formUpload">
      <form onSubmit={handleSubmit}>
        <div className='file-div'>
          <label className='file-label' htmlFor='file'>
            {filename}
          </label>
          <input
            type='file'
            className='file-input'
            id='file'
            onChange={handleChange}
          />
        </div>

        <input
          type='submit'
          value='Upload'
          className='btnSubmit'
        />
      </form>
    </section>
  );
};

export default FileUpload;