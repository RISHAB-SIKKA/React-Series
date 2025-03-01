import React from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
  const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/RISHAB-SIKKA')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }
    // , [])
  return (
    <>
        <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
            GitHub: {data.name} 

            <img src={data.avatar_url} alt="Git Pic" width={300} />
        </div>
    </>
  )
}

export default GitHub


export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/RISHAB-SIKKA')
  return res.json()
}