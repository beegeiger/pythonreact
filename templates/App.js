import React from 'react';
import { ContactForm } from './components/contactform';
import { Contact } from './components/contact';
import 'antd/dist/antd.css';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";



function App() {
   const { loading } = useAuth0();
   
   if (loading) {
      return <div>Loading...</div>;
   }
   
   return (
      <div className="App">
         <header>
         <NavBar />
         <ContactForm />
         <Contact />
         </header>
      </div>
   );
}
   
 export default App;