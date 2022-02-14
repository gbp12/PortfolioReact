import './App.css';
import {Header} from './components/Header';
import { Skills } from './components/Skills';
import { DivSecond, H1, H2 } from './components/Styles';







const App = () => {
  return (
   <div>
    <Header />


    <DivSecond>
      <H1>I´m specialised in</H1>
      <Skills />
      <H2>Some of my projects</H2>
    </DivSecond>
    

   </div>
  );
}

export default App;
