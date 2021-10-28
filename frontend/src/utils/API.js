import {useEffect, useState} from 'react'

export const useFetch = async (url) => {
  const [data, setData ] = useState(null)
  const [error, setError ] = useState(null)
  const [loading, setLoading ] = useState(true)

  // useEffect( ()=>{
  //   async function fetch(){
  //     setError(null)
  //     setLoading(true)
  //     try{
  //       let response = await fetch(url)
  //       if(!response.ok) throw Error('something happened')
  //       let data = await response.json()
  //       setData(data)
  //     }catch(err){
  //       console.log(err)
  //       setError(err)
  //       setData(null)
  //     }
  //     setLoading(false)
  //   }
  //   fetch()
    
  // },[url])

  useEffect( ()=>{
    (async ()=>{
      setError(null)
      setLoading(true)
      try{
        let response = await fetch(url)
        if(!response.ok) throw Error('something happened')
        let data = await response.json()
        setData(data)
      }catch(err){
        console.error(err)
        setError(err)
        setData(null)
      }
      setLoading(false)
    })()
  },[url])
  

  return {data, loading, error}
}