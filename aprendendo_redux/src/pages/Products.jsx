

import { useEffect, useState } from 'react'

import './Products.css'
import Card from '../components/Card'

import Message from '../components/Message.jsx'

import {useSelector} from 'react-redux'


        

const Products = () => {

  useEffect(()=>{document.title = 'Produtos'},[])

  // MESSAGE ADD/REMOVE PRODUCT CART
  const {divClass, message} = useSelector(rootReducer => rootReducer.messageReducer)
  // MESSAGE ADD/REMOVE PRODUCT CART


  // GET API REQ
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
    }, 100);
  }, [])
  // GET API REQ


  return (
    <>
    
    <main>
      <Message divClass={divClass} message={message}/>

      <h1 id='title'>Todos os Produtos</h1>
      <section>
        {(uploads.length >= 1) ? uploads.map((element, index)=>{
          const {name, src, value} = element
          return <Card name={name} src={src} value={value} index={index} key={index}/>
        }) : <div className='circle'></div>}
      </section>
    </main>
    </>
  )
}

export default Products