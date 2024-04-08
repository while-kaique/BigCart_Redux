
import { useEffect, useState } from 'react'

import './Products.css'
import Card from '../components/Card'

const Products = () => {

  const [uploads, setUploads] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/pictures", {
      method: 'GET'
    })
    .then((res) => {
      console.log('passou aqui')
      return res.json()
    })
    .then(data => setUploads(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <>
    <main>
      {uploads.map((element, index)=>{
        const {name, src} = element
        return <Card name={name} src={src} key={index}/>
      })}
    </main>
    </>
  )
}

export default Products