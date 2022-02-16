import './App.css';
import {Header} from './components/Header';
import { Skills } from './components/Skills';
import { DivSecond, H1, H2 } from './components/Styles';
import {Projects} from "./components/Projects"
import 'animate.css';








const App = () => {
  return (
   <div>
    <Header />


    <DivSecond className="animate__animated animate__fadeIn animate__delay-1s">
      <H1>I´m specialised in</H1>
      <Skills />
      <H2 >Some of my projects</H2>
      <Projects />
    </DivSecond>
    

   </div>
  );
}

export default App;
