import React, {useState, useEffect} from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import "./FrameOne.css";
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";

function FrameFive() {
   const [{}, dispatch] = useStateValue();
   const question = "Do you already have a corporate design ?";
   const [answer, setAnswerType] = useState("");
    function serviceChange(e) {
     setAnswerType(e.target.value);
     }
     useEffect(() => {
       if (answer !== "") {
         dispatch({
           type: 'ADD_T0_FRAMEONE',
           item: {
             question: question,
             answer: answer,
           }
         })
       }
     }, [dispatch, answer])
    return (
        <div className="frame">
        <div className="frame__one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__items">
            <p>Do you already have a corporate design ?</p>
            <form  className="pt-5 p-lg-5 form" value={answer} onChange={(e) => serviceChange(e)}>
                <div className="row">
                   <div className="col form-group">
                     <input type="radio" id="personal" name="corporate_design" value="Yes"/>
                     <label for="personal">Yes</label>
                   </div>
                   <div className="col form-group">
                      <input type="radio" id="ecommerce" name="corporate_design" value="No"/>
                   <label for="ecommerce">No</label>
                   </div>
               </div>
               <div className="row pt-4">
                 <div className="col form-group">
                    <input type="radio" id="company" name="corporate_design" value="I do not know"/>
                    <label for="company">I do not know</label>
                 </div>
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>50%</p>
               <Progressbar className="progress" bgcolor="#F29200" progress='50'  height={9} / >
            <div className="navigate">
             <Link to="/framefour">
                <img className="pre" src={Previous} alt="pre" />
             </Link>
             <Link to="/framesix">
               <img className="next" src={Next} alt="next" />
             </Link>
            </div>
         </div>
         </div>
         <footer className="footer">
           <p>Once all your answers have been recorded, we will send you a response to your email or phone call</p>
           <div className="footer__logo">
             <img className="scynett__logo" src={Logo} alt="Scynett" />
             <strong>SCYNETT</strong>
           </div>
         </footer>
        </div>
    )
}

export default FrameFive
