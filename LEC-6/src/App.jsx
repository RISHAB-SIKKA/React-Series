import React from 'react'
import BlogPost from './components/BlogPost'

let myObj = {
  brand:'nike'
}

let newArr = [1,2,3];

const App = () => {
  return (
   <>
     <h1 className='bg-green-400' text-black p-4  rounded-xl flex just>Taailwind CSS</h1>
     <BlogPost brand="Nike"/>
     <BlogPost brand="Adidas"/>
     <BlogPost brand="Puma"/>

   </>
  )
}

export default App