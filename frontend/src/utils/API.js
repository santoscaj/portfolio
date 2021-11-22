
export const Post = (url, rawData)=>{
  let token = localStorage.getItem('token')
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/json', Authentication: `Bearer ${token}`},
    body: JSON.stringify(rawData)
  }).then(response => {
    if(!response.ok) throw Error(response.statusText)
    return response.json()
  })
}

export const Put = (url, rawData)=>{
  let token = localStorage.getItem('token')
  return fetch(url, {
    method: 'PUT',
    headers: {'Content-Type':'application/json', Authentication: `Bearer ${token}`},
    body: JSON.stringify(rawData)
  }).then(response => {
    if(!response.ok) throw Error(response.statusText)
    return response.json()
  }).catch(e=>{
    if(e.message=='Unauthorized')
      window.location.href= '/login'
  })
}


export const Delete = (url)=>{
  let token = localStorage.getItem('token')
  fetch(url, {
    method: 'DELETE',
    headers: {'Content-Type':'application/json', Authentication: `Bearer ${token}`}
  }).then(response => {
    if(!response.ok) throw Error(response.statusText)
    return response.json()
  })
}

