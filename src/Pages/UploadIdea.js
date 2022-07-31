import React,{useState,useEffect} from 'react'
import { Link, useNavigate} from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const UploadIdea = () => {
    let navigate = useNavigate();

    const [idea, setIdea] = useState({
      name: "",
      idea : "",
    
    });
  
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      setData([idea, ...data]);
  
      setIdea({ name: "", idea: "" });
  
      e.preventDefault();
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 3000);
  
      setTimeout(() => {
        navigate("../idea/uploadedideas", { replace: true });
      }, 5000);
    };
  
    useEffect(() => {
      if (data.length <= 0) {
        return;
      } else {
        localStorage.setItem("ideas", JSON.stringify(data));
      }
    }, [data]);
  
    useEffect(() => {
      const localStorageData = JSON.parse(window.localStorage.getItem("ideas"));
  
      if (localStorageData) {
        setData(localStorageData);
      }
    }, []);
  
   
  
    if (loader) {
      return (
        <div className="loader-center">
          <BallTriangle
            height="150"
            width="190"
            ariaLabel="loading"
            color="#0000FF"
          />
          <p className="loader-uploading">Uploading...</p>
        </div>
      );
    } else {
      return (
        <div className="recipeform-form-container">
          <nav className="NutritionScreen-btn">
            <Link to="/ideas" className="go-back-btn">
              <i className="fa-solid fa-hand-point-left"> Go Back</i>
            </Link>
  
            {data.length >= 1 ? (
              <div className="recipe-upload-button-container">
                <Link
                  to="/idea/uploadedideas"
                  className="recipe-upload-button"
                >
                  View uploaded Ideas
                </Link>
              </div>
            ) : null}
          </nav>
  
          <h1>ENTER YOUR Idea </h1>
  
          <form onSubmit={submitHandler} className="recipeform-form">

            <p className="recipeform-form-p">
             Enter your idea
            </p>
  
            <label htmlFor="name">Enter Idea Name</label>
            <input
              onChange={(e) => setIdea({ ...idea, name: e.target.value })}
              placeholder="Enter name of a idea"
              type="text"
              id="name"
              name="name"
            ></input>
            <hr />
            <label htmlFor="idea">
              Enter Idea here 
            </label>
            <textarea
              onChange={(e) =>
                setIdea({ ...idea, idea: e.target.value })
              }
              placeholder="Eat green leafy vegetables"
              id="idea"
              name="idea"
              className="recipe-form-textarea"
            ></textarea>
            <hr />
            <button
              disabled={
                !idea.name ||
                !idea.idea 
                
              }
              className="recipeform-submitbtn"
              type="submit"
            >
              <i className="fa-solid fa-cloud-arrow-up"></i> Upload Data
            </button>
          </form>
        </div>
      );
    }
}

export default UploadIdea