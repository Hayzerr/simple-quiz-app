import { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";

const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3,
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: 1,
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
      answer: 2,
    }
  ];
  
const Quiz = () => {
    const [level, setLevel] = useState(0)
    const [selections, setSelections] = useState(Array(quizQuestions.length).fill(null))
    const [isFinish, setIsFinish] = useState(false);
    const [score, setScore] = useState(false);
    const selectOption = (e) => {
        if(isFinish == true) return;
        const updatedSelections = [...selections]
        updatedSelections[level] = e;
        setSelections(updatedSelections);
    }
    useEffect(() => {
        let cnt = 0;
        for(let i = 0; i < quizQuestions.length; i++){
            if(quizQuestions[i].answer == selections[i]){
                cnt++;
            }
        }
        setScore(cnt);
    }, [isFinish])
    return (
        <>
            {isFinish ? 
                <div className='text-4xl underline text-indigo-700'>
                    Total Score: {score}
                </div>
                : null
            }
            <h1 className='text-3xl'>
                {level+1}.{quizQuestions[level].question}
            </h1>
            <div className='gap-5 flex flex-col'>
                <Button variant={selections[level]==0 ? 'filled' : 'outlined'}
                     className={isFinish == true ? (selections[level] == 0 ? (quizQuestions[level].answer != selections[level] ? ' bg-red-800 px-24' : ' bg-green-700 px-24') : (0 == quizQuestions[level].answer ? "bg-green-700 px-24" : "px-24")) : "px-24"}
                     onClick={() => selectOption(0)}
                >
                    {quizQuestions[level].options[0]}
                </Button>
                <Button variant={selections[level] ==1 ? 'filled' : 'outlined'}
                     className={isFinish == true ? (selections[level] == 1 ? (quizQuestions[level].answer != selections[level] ? ' bg-red-800 px-24' : ' bg-green-700 px-24') : (1 == quizQuestions[level].answer ? "bg-green-700 px-24" : "px-24")) : "px-24"}
                     onClick={() => selectOption(1)}
                >
                    {quizQuestions[level].options[1]}
                </Button>
                <Button variant={selections[level]==2 ? 'filled' : 'outlined'}
                     className={isFinish == true ? (selections[level] == 2 ? (quizQuestions[level].answer != selections[level] ? ' bg-red-800 px-24' : ' bg-green-700 px-24') : (2 == quizQuestions[level].answer ? "bg-green-700 px-24" : "px-24")) : "px-24"}

                     onClick={() => selectOption(2)}
                >
                    {quizQuestions[level].options[2]}
                </Button>
                <Button variant={selections[level]==3 ? 'filled' : 'outlined'}
                     className={isFinish == true ? (selections[level] == 3 ? (quizQuestions[level].answer != selections[level] ? ' bg-red-800 px-24' : ' bg-green-700 px-24') : (3 == quizQuestions[level].answer ? "bg-green-700 px-24" : "px-24")) : "px-24"}

                     onClick={() => selectOption(3)}
                >
                    {quizQuestions[level].options[3]}
                </Button>
            </div>
            
            <div className='gap-10 flex'>
                {level-1 >= 0 ? (
                    <Button variant='filled' className='bg-red-200 text-black'
                        onClick={() => setLevel(level-1)}
                    >Previous quiestion</Button>
                    ) : null
                }
                {level+1 < 5 && selections[level] != null ? (
                    <Button variant='filled' className='bg-red-200 text-black'
                        onClick={() => setLevel(level+1)}
                    >Next quiestion</Button>
                    ) : null
                }
            </div>
            {isFinish == false ?
            
            <Button variant='filled' onClick={() => setIsFinish(true)}>Submit</Button> 
            : null
            }
        </>
    )
}

export default Quiz
