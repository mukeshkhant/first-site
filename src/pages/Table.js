import React, { useEffect, useState } from 'react'
import Card from '../components/card';
const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(data);
  return (
    <div>
      <div className='container'>
        <div className='row gy-3'>
          {data.map((users, i) => <div key={users.id} className='col-4'><Card name={users.name} carttittle={users.website} cardpreg={users.phone} /><div>{i}.&nbsp;{users.name} <br/> Loction : {users.address.city}</div></div>)}
        </div>
      </div>
    </div>
  )
}

export default Table
