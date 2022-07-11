import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const Video = () => {
  const [progress, setProgress] = useState(0);
  const [src, setSrc] = useState([]);
  const [video, setvideo] = useState(null);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setSrc([downloadURL, ...src]);

          console.log("File available at", downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    if (src !== undefined) {
      if (src.length <= 0) {
        return;
      } else {
        window.localStorage.setItem("url", JSON.stringify(src));
      }
    }
  }, [src]);

  useEffect(() => {
    let urls = JSON.parse(window.localStorage.getItem("url"));
    if (urls) {
      setSrc(urls);
    }
  }, []);

  return (
    <>
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>
      <h1 className="video-heading">Share your child video</h1>
      <div>
        {/* <form onSubmit={formHandler}>
          <input type="file" className="input" />
        </form> */}
        {/* asdsa */}
        <form className="btns" onSubmit={formHandler}>
          <input className="select-file" type="file" id="file" />
          <label htmlFor="file">
            <span>Select </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
            </svg>
          </label>
          <button className="upload-file" type="submit">
            <label htmlFor="file">
              <span>Upload </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
              >
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
              </svg>
            </label>
          </button>
          <i id="video-icon" className="fa-solid fa-video"></i>
        </form>
        {/* sadasd */}
        <hr />
        <h2 id="progress">
          Uploading: <span>{progress}%</span>{" "}
        </h2>
      </div>
      <div>
        <video className="video" src={video} controls muted></video>
      </div>
      <div>
        {src.map((item, id) => {
          return (
            <>
              <video
                className="vid-li"
                src={item}
                key={id}
                onClick={() => setvideo(item)}
              >
                Sorry, your phone doesn't support embedded videos.
              </video>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Video;
