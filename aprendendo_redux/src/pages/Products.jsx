
import { useEffect } from 'react'

import './Products.css'
import Card from '../components/Card'

const Products = () => {

  const picturesArray = useEffect(()=>{
    fetch("http://localhost:3000/pictures", {
      method: 'GET',
      headers: {
        'Content-Type:': 'image/png'
      }
    })
    .then(resp => resp.json())
    .catch()
  }, [])

  return (
    <>
    <main>
      {picturesArray.map((elemento)=>{
        <Card name={elemento.name} src={elemento.src} />
      })}
    </main>
    </>
  )
}

export default Products