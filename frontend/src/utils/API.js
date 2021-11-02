import {useEffect, useState} from 'react'

export const useGet = async (url, image=false) => {
  const [data, setData ] = useState(null)
  const [error, setError ] = useState(null)
  const [loading, setLoading ] = useState(true)
  const abortController = new AbortController()
  
  useEffect( ()=>{
    (async ()=>{
      setError(null)
      setLoading(true)
      try{
        let data
        let response = await fetch(url, {
          signal: abortController.signal, 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        if(!response.ok) throw Error('something happened')
        if(image) {
          data = await response.blob()
          data = URL.createObjectURL(data)
        } else  data = await response.json()
        setData(data)
      }catch(err){
        if(err.name!=='AbortError'){
          console.error(err)
          setError(err)
          setData(null)
        }
      }
      setLoading(false)
    })()
    return ()=>abortController.abort()
     // eslint-disable-next-line
  },[url])
  return {data, loading, error}
}

export const usePost = (url, rawData)=>{
  const [data, setData] = useState('')  
  const [loading, setLoading] = useState(false)  
  const [error, setError] = useState('') 
  const abortController = new AbortController()

  useEffect(()=>{
    setLoading(true)
    setError(null)

    fetch(url, {
      method: 'POST',
      signal: abortController.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rawData) 
    }).then(res=>{
      if(!res.ok) throw Error('something happened')
      return res.json()
    }).then(data=>{
      setData(data)
      setLoading(false)
    }).catch(err=>{
      if(err.name !== 'AbortError' ){
        setError(err)
        setLoading(false)
      }
    })

    return ()=>abortController.abort()
  // eslint-disable-next-line
},[url])
return {data, loading, error}
}

export const usePut=(url, rawData)=>{
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const abortController = new AbortController()
  useEffect(()=>{
    setLoading(true)
    fetch(url, {
      method: 'PUT',
      signal: abortController.signal,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(rawData)
    }).then(res=>{
      if(!res.ok) throw Error('something happened')
      return res.json()
    }).then(data=>{
      setData(data)
      setError(null)
    }).catch(err=>{
      console.log(err)
      setData(null)
      setError(err)
    })
    setLoading(false)

    return abortController.abort()
    // eslint-disable-next-line
  },[url])
  return {data, loading, error}
}


export const useDelete = (url)=>{
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const abortController = new AbortController()
  
  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      try{
        let response = await fetch(url, {
          method: 'DELETE', 
          signal: abortController.signal
        })
        if(!response.ok) throw Error('something happened')
        let data = await response.json()
        setData(data)
        setError(null)
      }catch(e){
        if(!e.name==='AbortError'){
          console.log(e)
          setData(null)
          setError(e)
        }
      }
      setLoading(false)
    })()
    return abortController.abort()
    // eslint-disable-next-line
  },[url])
  return {data, loading, error}
}