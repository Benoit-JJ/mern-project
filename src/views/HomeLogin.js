import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const HomeLogin = () => {
  const [post, setPost] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5050/api/posts") //
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        post = setPost(result);
      });
  }, []);

  return (
    <div className="container">
      <h1>PAGE ACCEUIL LOGGIN</h1>
      <div className="container box-post">
        {post &&
          post.map((x) => {
            return (
              <div key={x._id} className="container-post">
                <h3>{x.title}</h3>
                <h5>
                  Mise en ligne le : {dayjs(x.createdAt).format("DD/MM/YYYY")}
                </h5>
                <p className="content-post">{x.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

//{x.title}
//{x.body}
//{dayjs(x.createdAt).format("DD/MM/YYYY")}
export default HomeLogin;
