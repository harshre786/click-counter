import React, { useState,useEffect } from 'react'


function App() {
  const [data,setData] = useState([]);

 async function fetchData()
{
  const res = await fetch(`https://api.unsplash.com/photos/?client_id=vHxdep5fDn8BreN46PJFZGYFghwjFiMO6tFKSHVKG9c`);
  const responce = await res.json();
  console.log(responce);
  setData(responce)
}
useEffect(() => {
  fetchData();
}, []);

  return (
    <div>
    {data.map((img) => (
      <img key={img.id} src={img.urls.small} alt={img.alt_description || 'Unsplash Image'} />
    ))}
  </div>
  )
}

export default App;
