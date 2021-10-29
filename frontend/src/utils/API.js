import {useEffect, useState} from 'react'

export const useGet = async (url) => {
  const [data, setData ] = useState(null)
  const [error, setError ] = useState(null)
  const [loading, setLoading ] = useState(true)

  const abortController = new AbortController()
  
  useEffect( ()=>{
    (async ()=>{
      setError(null)
      setLoading(true)
      try{
        let response = await fetch(url, {signal: abortController.signal })
        if(!response.ok) throw Error('something happened')
        let data = await response.json()
        setData(data)
      }catch(err){
        if(err.name!='AbortError'){
          console.error(err)
          setError(err)
          setData(null)
        }
      }
      setLoading(false)
    })()

    return ()=>abortController.abort()
  },[url])
  

  return {data, loading, error}
}