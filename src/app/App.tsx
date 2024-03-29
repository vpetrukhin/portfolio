import { About } from 'sections/About';
import { Footer } from 'sections/Footer';
import { Main } from 'sections/Main';
import { Projects } from 'sections/Projects';
import { Skills } from 'sections/Skills';


function App() {
  return (
    <div className="app">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
