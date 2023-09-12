import "./FromStyles.css"
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="mail">Email</label>
        <input
          type="email"
          id="mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          required
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={6}
          id="message"
          placeholder="Type your message here"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
