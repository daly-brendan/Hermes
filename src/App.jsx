import { useState } from 'react'
import Intro from  './Components/Intro';
import Form from './Components/Form';


function App() {
  

  return (
    <div className='bg-[#FCA311] dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-Inconsolata'>
      <div className='max-w-5xl w-11/12 mx-auto'>
        
        <Intro />
        <Form />

      </div>

    </div>
  )
}

export default App
