import React, { useState } from "react";
function App() {
  const [clicked, setClicked] = useState([]);
  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { id: 1, text: "Berlin", correct: false },
        { id: 2, text: "Madrid", correct: false },
        { id: 3, text: "Paris", correct: true },
        { id: 4, text: "Rome", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: [
        { id: 1, text: "Earth", correct: false },
        { id: 2, text: "Mars", correct: true },
        { id: 3, text: "Jupiter", correct: false },
        { id: 4, text: "Venus", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who developed the theory of relativity?",
      options: [
        { id: 1, text: "Isaac Newton", correct: false },
        { id: 2, text: "Albert Einstein", correct: true },
        { id: 3, text: "Galileo Galilei", correct: false },
        { id: 4, text: "Nikola Tesla", correct: false },
      ],
    },
  ];

  const handleChange = async (id, e) => {
    try {
      const findClick = data?.find((item, index) => item?.id === id);
      const clickUser = e;

      if (findClick) {
        const findCorrect = findClick?.options.find(
          (item, index) => item?.correct === true
        );

        if (findCorrect?.id === clickUser?.id) {
          setClicked([...clicked, { [e.id]: true }]);
        } else {
          setClicked([...clicked, { [e.id]: false }]);
        }
      }
    } catch (error) {}
  };

  console.log(clicked, "clicked");

  return (
    <>
      <div>
        intall Comment ( npm create vite@latest kalai-app --template react )
        1.react 2.Javascript 3.install vite local
      </div>
      {data.map((item, index) => {
        return (
          <>
            <div>
              {index + 1} . {item.question}
            </div>

            <div>
              {item.options.map((items, index) => {
                return (
                  <div
                    className="d-flex gap-2"
                    style={{
                      paddingLeft: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      margin: "10px 0px",
                    }}
                  >
                    <span onClick={() => handleChange(item?.id, items)}>
                      {clicked?.some((item, index) => {
                        return item[items?.id] === true;
                      }) ? (
                        <input type="checkbox" checked={true} />
                      ) : (
                        <input type="checkbox" checked={false} />
                      )}
                    </span>
                    {items?.text}
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
