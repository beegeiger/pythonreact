import React from './static/node_modules/react';
// import { ContactForm } from './static/js/components/contactform';
// import { Contact } from './static/js/components/contact';
// import 'antd/dist/antd.css';
import NavBar from "./static/js/components/navbar";
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
         </header>
         <body>
            <p>This is in App.js. The Navbar should be above^</p>
         </body>
      </div>
   );
}
   
 export default App;