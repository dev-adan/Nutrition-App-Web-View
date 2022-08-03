import React, { useState, useEffect } from "react";
import IdeaCard from "./IdeaCard";
import { Bars } from "react-loader-spinner";

export const data = [
  {
    id: 1,
    name: "bread",
    body: "You can easily make your diet a bit healthier by choosing whole grain bread in place of traditional refined grain bread.",
  },
  {
    id: 2,
    name: "egg",
    body: "When looking at studies comparing various types of calorie-matched breakfasts, eggs come out on top. So, simply replacing your current breakfast with eggs may result in major benefits for your health.",
  },
  {
    id: 3,
    name: "yogurt",
    body: "Simply replace some snacks or regular yogurt varieties with Greek yogurt for a hearty dose of protein and nutrients.",
  },
  {
    id: 4,
    name: "weight",
    body: "If you are trying to lose weight, aim to add a source of protein to each meal and snack. It will help you feel fuller for longer, curb cravings, and make you less likely to overeat.",
  },
  {
    id: 5,
    name: "water",
    body: "The most important thing is to drink water instead of other beverages. This may drastically reduce your intake of sugar and calories. Drinking water regularly may also be linked to improved diet quality and could decrease your calorie intake from beverages.",
  },
  {
    id: 6,
    name: "vitamin",
    body: "If you don not eat fatty seafood regularly, you should consider taking a supplement. Omega-3s and vitamin D can often be found together in many supplements.",
  },
  {
    id: 7,
    name: "pizza",
    body: "Eating out doesn’t have to involve unhealthy foods. They may just be a great replacement for your favorite burger or pizza joint. What is more, you can generally get these meals at a very decent price.",
  },
  {
    id: 8,
    name: "plate",
    body: "It has been proven that the size of your dinnerware can affect how much you eat. Eating from a large plate can make your portion look smaller, while eating from a small plate can make it look bigger",
  },
  {
    id: 9,
    name: "fries",
    body: "Replacing your french fries with baked or boiled potatoes is a great way to shave off calories and avoid these unhealthy compounds.",
  },
  {
    id: 10,
    name: "healthy",
    body: "Aim to try making a new healthy recipe at least once per week. This can change up your food and nutrient intakes and hopefully add some new and nutritious recipes to your routine.",
  },
];

export default function SearchIdea() {
  const [query, setQuery] = useState("");
  const [idea, setIdea] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setIdea([data[9].body]);
  }, []);

  const SearchIdea = async (e) => {
    e.preventDefault();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);

    data.find((obj) => {
      if (query.toLowerCase() === obj.name) {
        setIdea([obj.body, ...idea]);
      }
    });
  };

  return (
    <>
      <form className="nutrition-detail-form" onSubmit={SearchIdea}>
        <div className="nutrition-detail-form-div">
          <input
            type="text"
            name="query"
            placeholder="Search For Ideas"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i
            className="fa-solid fa-solid fa-magnifying-glass"
            onClick={SearchIdea}
          ></i>
        </div>
      </form>
      <h1 id="small-heading">Searched Ideas</h1>
      {!loader ? (
        <div className="card-list">
          {idea.map((data) => (
            <IdeaCard idea={data} key={data.id} />
          ))}
        </div>
      ) : (
        <div className="loader-center">
          <Bars
            height="150"
            width="190"
            ariaLabel="loading"
            color="#fa7d19 
          "
          />
        </div>
      )}
    </>
  );
}
