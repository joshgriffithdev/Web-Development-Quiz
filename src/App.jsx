import { useState, useEffect } from 'react';
import './App.css';
import questions from './questions';

function App() {
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [currQStr, setCurrQStr] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [correctA, setCorrectA] = useState(0);
  const [numArr, setNumArr] = useState([]);
  const [qCount, setQCount] = useState(0);
  


  function handleStart() {
    setQuizStarted(true);
    let numbers = Array.from({ length: 50 }, (_, i) => i);
    setNumArr(numbers);
  }


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  useEffect(() => {
    if (quizStarted) {
      if (numArr.length > 0 && currQStr === "") {
        chooseQuestion();
      } 
      else if (numArr.length === 0) {
        // Quiz finished
        setQuizStarted(false);
        alert(`Quiz finished! Your score: ${score}/50`);
        setQCount(0);
        setScore(0);
      }
    }
    console.log(numArr)
  }, [numArr, quizStarted, currQStr, score]);
  




  function chooseQuestion() {
    let arrID = getRandomNumber(0, numArr.length - 1);
    const questionIndex = numArr[arrID];

    setCurrentQ(questionIndex);

    //Remove the chosen question from numArr
    const newArr = numArr.filter((item) => item !== questionIndex);
    setNumArr(newArr);

    renderQuestion(questionIndex);
  }


  function renderQuestion(index) {
    //Check for error
    if (index < 0 || index >= questions.length) {
      console.error("Invalid question index:", index);
      return;
    }

    setCurrQStr(questions[index].question);

    //Chooses random button to make the right answer
    const randButton = getRandomNumber(1, 4);
    if(randButton === 1) {
      setA1(() => questions[index].cAnswer);
      setA2(() => questions[index].wAnswer1);
      setA3(() => questions[index].wAnswer2);
      setA4(() => questions[index].wAnswer3);
      setCorrectA(1);
    }
    else if(randButton === 2) {
      setA1(() => questions[index].wAnswer1);
      setA2(() => questions[index].cAnswer);
      setA3(() => questions[index].wAnswer2);
      setA4(() => questions[index].wAnswer3);
      setCorrectA(2);
    }
    else if(randButton === 3) {
      setA1(() => questions[index].wAnswer2);
      setA2(() => questions[index].wAnswer1);
      setA3(() => questions[index].cAnswer);
      setA4(() => questions[index].wAnswer3);
      setCorrectA(3);
    }
    else if(randButton === 4) {
      setA1(() => questions[index].wAnswer3);
      setA2(() => questions[index].wAnswer1);
      setA3(() => questions[index].wAnswer2);
      setA4(() => questions[index].cAnswer);
      setCorrectA(4);
    }
    else {
      console.error("Answer text could not be added to the buttons");
    }
  }
  


  function handleQuestions(choice) {
    //If correct, increment score by 1
    if(choice == correctA) {
      setScore((prevScore) => prevScore + 1);
    }

    //Make question and buttons blank
    setCurrQStr("");
    setA1("");
    setA2("");
    setA3("");
    setA4("");
    setCorrectA(0);

    setQCount((prevQCount) => prevQCount + 1);
  }



  return (
    <div id='container'>
      {!quizStarted && (
        <>
          <h1 id='title'>Web Development Quiz</h1>
          <button onClick={handleStart} id='start'>START</button>
        </>
      )}

      {quizStarted && (
        <>
        <h1 id='qText'>{currQStr}</h1>
        <h2 id='count'>{qCount + 1}/50</h2>
        <div className='qButtons'>
          <button onClick={() => handleQuestions(1)} id='button1'>{a1}</button>
          <button onClick={() => handleQuestions(2)} id='button2'>{a2}</button>
          <button onClick={() => handleQuestions(3)} id='button3'>{a3}</button>
          <button onClick={() => handleQuestions(4)} id='button4'>{a4}</button>
        </div>
        </>
      )}
    </div>
  )
}

export default App;
