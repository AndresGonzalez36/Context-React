import Heart from "./Heart";
import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import MyContext from "../context/MiContexto";

const Foto = ({fav,foto}) => {
  const { fotos, setFotos } = useContext(MyContext);

  const eligeFavorito = (id) => {
    const fotoAprov = fotos.findIndex((f) => f.id === id);
    fotos[fotoAprov].liked = !fotos[fotoAprov].liked;
    setFotos([...fotos]);
    
  }
  return (
    <Card style={{ width: '18rem', height: '12rem', backgroundSize: 'cover', backgroundImage: `url(${foto.src.tiny})` }}>
      {!fav && <Button className="btnFav" onClick={()=>eligeFavorito(foto.id)} >
        <Heart filled={foto.liked}></Heart>
        </Button>
      }
      <Card.Title style={{ marginTop: '5rem', color: 'white' }}>{foto.alt}</Card.Title>
    </Card>
  )
}

export default Foto