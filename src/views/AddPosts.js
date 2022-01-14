import React, { useState } from "react";

const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState("");
  const [body, setBody] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmitPost = (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("picture", picture);
    const url = "http://localhost:5050/api/posts/addpost";
    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: form,
    };
    fetch(url, requestOptions)
      .then((response) => console.log("Submitted successfully"))
      .catch((error) => console.log("Form submit error", error));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmitPost} enctype="multipart/form-data">
        <h1>Ajouter un article</h1>
        <div className="mb-3">
          <label for="FormControlTextarea" className="form-label">
            Titre de l'article
          </label>
          <input
            className="form-control form-control"
            name="title"
            type="text"
            placeholder="Titre de l'article"
            aria-label=".form-control"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Catégorie de l'article</label>
          <select
            className="form-select form-control w-25"
            aria-label="select"
            name="select"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option selected>Catégorie de l'article</option>
            <option value="1">PHP</option>
            <option value="2">JavaScript</option>
            <option value="3">Python</option>
            <option value="4">MongoDB</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="FormControlTextarea" class="form-label">
            Contenu de l'article
          </label>
          <textarea
            className="form-control w-25"
            name="body"
            id="FormControlTextarea"
            rows="3"
            type="text"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Photo de l'article</label>
          <input
            type="file"
            name="picture"
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary">Publier !</button>
      </form>
    </div>
  );
};

export default AddPosts;
