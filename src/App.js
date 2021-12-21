import React from 'react';
import Cards from './components/Cards';
import GlobalStyle from './components/GlobalStyles';
import Navigation from './components/Navbar'
import ContactForm from './components/Form';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navigation/>
      <Cards/>
      <ContactForm/>
    </div>
  );
}

export default App;
