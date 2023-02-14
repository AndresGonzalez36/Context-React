import { useContext } from "react";
import MyContext from "../context/MiContexto";
import Foto from "./Foto.jsx";
import { Container,Row,Col } from 'react-bootstrap';
import "../assets/css/galeria.css";

function Galeria({fav = false}) {
  const { fotos} = useContext(MyContext);
  console.log(fotos)

  return (
    <div className="galeria grid-columns-4 p-3">
      {fotos.filter((f) => {
        if(fav){
          return f.liked?f:null;
        } else {
         return f;
        }
        }).map((f) => {
        return <Col key={f.id}><Foto fav= {fav} foto={f}></Foto></Col>       
        
      })}
   </div>
  );
}
export default Galeria;