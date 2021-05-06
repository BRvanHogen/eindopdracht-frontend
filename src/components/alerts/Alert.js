// import React from 'react';
// import Button from "../button/Button";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//
// toast.configure()
// function Alert(type, content, position, autoClose) {
//
//     const notify = ()=> {
//         toast(`${content}`, toast.POSITION`${position}`);
//     }
//     return (
//         <div>
//             <Button
//             text="notify!"
//             onClick={notify}
//             />
//         </div>
//     );
// }
//
//
// export default Alert;

//STRATEGIE
//[] alert-message wordt getriggerd door andere onClick
    //[] deze onClick toggled de className naar visible
//[] alle variabelen (headertekst en tekst) worden
//   ingevuld in js.file waar de alert naartoe wordt geexporteerd


//CASE:
//in deleteProject moet na klikken op 'deleteproject'
//éérst de popup worden getriggerd. Als hierin op
//button 'yes' of 'proceed' wordt geklikt, volgt
//pas de functie
//[] we hebben dus een onClick nodig in het Alert Template

// check dit even:
// https://www.youtube.com/watch?v=nX_xDBR_gqo
// als ik dit ga gebruiken, dan autoClose: false;
// ook zelf buttons toevoegen, zie 09:06.
// ook mooi als achtergrond opaque wordt, zodat user begrijpt dat
// pop-up gesloten moet worden