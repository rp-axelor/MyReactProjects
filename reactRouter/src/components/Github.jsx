import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    
    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Purbiaraju23')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Folllowers: {data.followers}
    <img className='rounded-lg'  src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Purbiaraju23')
    return response.json()
}  //method to load data on mouse hover