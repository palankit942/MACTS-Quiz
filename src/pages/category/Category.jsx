import React from "react";
import "./category.css";
import { categoryData } from "../../data/categoryData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizData } from "../../data/quizData.js";
import { setQuestions } from "../../redux/categorySlice.js";

function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function categoryHandler(categoryValue) {
    const findCategory = quizData.find(
      (ele) => ele.categoryValue === categoryValue
    );
    dispatch(setQuestions(findCategory));
    navigate("/quiz");
  }

  return (
    <div className="category-container flex flex-col items-center p-8 gap-8">
      <h3 className="category-heading">Categories</h3>
      {categoryData.map(
        ({
          id,
          categoryName,
          categoryDescription,
          categoryImage,
          categoryValue,
        }) => (
          <div
            key={id}
            className="category-card flex items-center"
            onClick={() => categoryHandler(categoryValue)}
          >
            <div>
              <img
                className="category-card-img w-48"
                src={categoryImage}
                alt="category-card"
              />
            </div>
            <div className="card-texts">
              <h4 className="card-title">{categoryName}</h4>
              <p className="card-subTitle">{categoryDescription}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export { Category };
