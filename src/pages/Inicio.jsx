import Card from "../components/Card/Card";
import ButtonLink from "../components/ButtonLink.jsx";
import "./Inicio.css"

export default function Inicio() {
  return <>
    <section className="primerSeccion">
      <div>
        <h1>Bienvenidos a</h1>
        <h1>Luna & Granos Café</h1>
        <p>Disfruta de los mejores cafés artesanales, pasteles frescos y un ambiente acogedor perfecto para compartir momentos especiales.</p>
        <ButtonLink pagina={"/carta"} texto={"Ver nuestra carta"}/>
        <ButtonLink pagina={"/contacto"} texto={"Hacer reserva"}/>
      </div>
      <img src="src/assets/imagenes/imagenInicio.jfif" alt="" />
    </section>
    <section>
      <h2>¿Por qué elegirnos?</h2>
      <p>En Luna & Granos Café nos apasiona ofrecer la mejor experiencia cafetera, combinando calidad, comodidad y un servicio excepcional.</p>
      <div className="flexContainer">
        <Card titulo={"Café Premium"} icono={"src/assets/logo.png"} texto={"Granos seleccionados de las mejores fincas del mundo"}></Card>
        <Card titulo={"Horarios Flexibles"} icono={"src/assets/logo.png"} texto={"Abierto todos los días de 7:00 AM a 10:00 PM"}></Card>
        <Card titulo={"Ubicación Central"} icono={"src/assets/logo.png"} texto={"Fácil acceso en el corazón de la ciudad"}></Card>
      </div>
    </section>
    <section className="tercerSeccion">
      <h2>¿Listo para una experiencia única?</h2>
      <p>Ven y descubre nuestros sabores únicos, desde cafés especiales hasta deliciosos pasteles artesanales. Tu mesa te está esperando.</p>
      <ButtonLink pagina={"/carta"} texto={"Ver nuestra carta"}/>
      <ButtonLink pagina={"/contacto"} texto={"Hacer reserva"}/>
    </section>
  </>;
}
