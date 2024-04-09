
import { useEffect, useState } from 'react'

import './Products.css'
import Card from '../components/Card'

const Products = () => {

  const [uploads, setUploads] = useState([])

  useEffect(()=>{
    setTimeout(() => {
      fetch("http://localhost:3000/pictures", {
        method: 'GET'
      })
      .then((res) => {
        return res.json()
      })
      .then(data => setUploads(data))
      .catch(err => console.log(err))
    }, 3000);
  }, [])
  return (
    <>
    
    <main>
      <h1 id='title'>Todos os Produtos</h1>
      <section>
        {(uploads.length >= 1) ? uploads.map((element, index)=>{
          const {name, src} = element
          return <Card name={name} src={src} key={index}/>
        }) : <div className='circle'></div>}
      </section>
    </main>
    </>
  )
}

export default Products