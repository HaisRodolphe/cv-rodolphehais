import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import FormationsExperiences from "./components/FormationsExperiences"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { Preview, print } from 'react-html2pdf'

function App() {
  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    setTimeout(() => {
      print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:80% !important")
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }
  return (
    <Preview id={"cv-print"} class="cv-print">
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <button onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
              </button>
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>

      {/* <p>https://www.youtube.com/watch?v=V6VdW5J2juE </p> */}
      {/* <p>23.23</p> */}
      {/* react, material ui, react-html2pdf */}
      {/* variable css F*/}
      {/* react, material ui, react-html2pdf */}
      {/* colonne de gauche F*/}

      {/* detail personnels - User F*/}
      {/* compétences - skills */}
      {/* langues - skills */}
      {/* centres d'intérêts - interests*/}

      {/* colonne de droite */}
      {/* profil - profil */}
      {/* formations - formations */}
      {/* exp - experiences */}

      {/* light/dark mode */}
        {/* generation pdf */}
      </div>
    </Preview>

  );
}

export default App;
