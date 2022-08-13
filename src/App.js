import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CardBootStrap from './components/card';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="container">
        <Header headerText = "Galería de Imágenes con React"/>
        
        <div className="divCards">
          <CardBootStrap
            src = "https://pixabay.com/get/g4b6f049793a89af083f7a03a527421fddd83806f5fb44a569ff98c27526c50739bb5746636ae69c1d97c9460103d5233e7bfae50468c2a1d87060c86a4169588b86e2beac9b9445bc85a58c8ddf1f65e_640.jpg"
            title = "Anciana"
            cardText= "¿puede la medicina alargar la vida y puede, al tiempo, la sociedad, ofrecer una vida digna a los ancianos?"
          />
          
          <CardBootStrap
            src = "https://chinita-arlequin.uchile.cl/images/usuarios/seleccionadas/48-Sergio_Lanio_Villa_Alemana.jpg"
            title = "Harmonia axyridis o chinita arlequín"
            cardText= "Especie invasora dañina en nuestro país, reconocible por la m en fondo blanco detrás de la cabeza. "
          />

          <CardBootStrap
            src = "https://static.inaturalist.org/photos/103823028/large.jpeg"
            title = "Eriopis chilensis"
            cardText= "La más común de las chinitas chilenas, la especie se distribuye desde la I Región de Tarapacá hasta la X Región de Los Lagos."
          />
        </div>
          
        <Footer footerText = "Imágenes y pensamientos random." />
      </div>
    </>
  );
}

export default App;
