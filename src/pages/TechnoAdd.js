import React from "react";

const TechnoAdd = () => {
  return (
    <div className="techno-add">
      <h1>Add a Techno</h1>
      <form>
        <label htmlFor="techno-name">Name:</label>
        <br />
        <input type="text" name="techno-name" id="techno-name" />
        <br />
        <label htmlFor="techno-category">Category:</label>
        <br />
        <select name="techno-category" id="techno-category">
          <option value="">Select a category</option>
          <option value="front">Front</option>
          <option value="back">Back</option>
          <option value="fullstack">FullStack</option>
          <option value="other">Other</option>
        </select>
        <br />
        <label htmlFor="techno-descriptiony">Description:</label>
        <br />
        <textarea
          name="techno-description"
          id="techno-description"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <input type="submit" value="Add Techno" />
      </form>
    </div>
  );
};

export default TechnoAdd;
