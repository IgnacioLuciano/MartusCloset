import React from 'react';
import { render } from 'react-dom';
import { Inicio, SobreNosotros, Servicios, Galeria, Contacto, Bruma } from './screens';

const Header = ({ pathname }) => {
  switch(pathname) {
    case "/SobreNosotros":
      return <SobreNosotros />;
    case "/Servicios":
      return <Servicios />;
    case "/Galeria":
      return <Galeria />;
    case "/Contacto":
      return <Contacto />;
    case "/Bruma":
        return <Bruma />; 
    default:    
      return <Inicio />;
  }
};

let pathname = window.location.pathname;

render(<Header pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});



// export default Header;

// ReactDOM.render(
//     <div>
//         img src={'./Images/MartusLogo.png" height="250" width="250"image_name.jpeg'}>
//             <p class="bienvenida">Bienvenidos a MARTUS CLOSET.</p>

//             <div class="startmenu">

//                 <a href="https://www.facebook.com/martuscloset/">Ayuda</a>
//                 <a href="https://www.facebook.com/martuscloset/">Favoritos</a>
//                 <a href="https://www.facebook.com/martuscloset/">Contacto</a>
//                 <a href="galeria.html">Galeria</a>
//                 <a href="https://www.facebook.com/pg/martuscloset/services/?ref=page_internal">Servicios</a>

//             </div>,
//             </div>,

//            </div>

//             <div id="slideshow">
//                 <div>
//                     <img src="./images/hair1.jpg" height="250" width="250">
//         </div>
//                     <div>
//                         <img src="./images/hair2.jpg" height="250" width="250">
//         </div>
//                         <div>
//                             <img src="./images/makeup1.jpg" height="250" width="250">
//         </div>
//                             <div>
//                                 <img src="./images/makeup2.jpg" height="250" width="250">
//         </div>
//                                 <div>
//                                     <img src="./images/makeup3.jpg" height="250" width="250">
//         </div>
//                                     <div>
//                                         <img src="./images/nails1.jpg" height="250" width="250">
//         </div>
//                                         <div>
//                                             <img src="./images/nails2.jpg" height="250" width="250">
//         </div>
//                                             <div>
//                                                 <img src="./images/nails3.jpg" height="250" width="250"> </div>
//                                             </div>

//                                         </div>, 




//     document.getElementById('root')
//   );