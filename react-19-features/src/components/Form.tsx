import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
