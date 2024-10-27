import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import Quiz from "./components/Quiz.jsx"

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <>
    
      <div className='flex justify-center flex-col gap-10 min-h-screen items-center'>
          {!showQuiz ?
            (
              <>
                <h1 className="text-3xl font-bold">
                       WElCOME TO THE QUIZ
                </h1>
                <Button variant="filled" className='px-20' onClick={() => setShowQuiz(true)}>Start the quiz</Button>
              </>
            ) :
            (
              <Quiz/>
            )
          }
        </div>
    </>
  )
}

export default App
