
import './Card.css'

const Card = ( {name, src} ) => {
  return (
    
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="card">
        <div className="image">
          <img src="/images/camisa.png" alt="nãosei" />
        </div>
        <section>
          <div className="info">
            <h1>Nome</h1>
              <div className="stars">
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
            </div>
          </div>
          <button>Comprar</button>
        </section>
      </div>
    </>
  )
}

export default Card