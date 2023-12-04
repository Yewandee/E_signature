import logo from './logo.svg';
import './App.css';
import img1 from "./images/chamslogo.jpg"
import img2 from "./images/gphone.png"
import img3 from "./images/gemail.png"
import img4 from "./images/gmap.png"
import img5 from "./images/glink.png"
import img6 from "./images/gfacebook.png"
import img7 from "./images/ginstagram.png"
import img8 from "./images/glinkedin.png"
import img9 from "./images/gtwitter.png"

function App() {
  return (
    <div className="App">
      <table className="ftable">
        <tr>
          <td> </td>
          <td className="names" style={{ lineHeight: "3px", marginBottom: "10px" }}>
            <h4>Opeyemi Ogunlana</h4>
            <h5>Human Resources Dept.</h5>
          </td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid black" }}>
            <img className="chamslogo" src={img1} />
            <td>

            </td>
          </td>
          <tr>
            <td>
              <img src={img2} />
            </td>
            <td>
              <p><a href="">+2349023838907</a></p>
            </td>

          </tr>
          <tr>
            <td>
              <img src={img3} />
            </td>
            <td>
              <p><a href="">Support@chamsswitch.com</a></p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={img4} />
            </td>
            <td>
              <p><a href="">8, Louis Solomon Close, Victoria Island, Lagos, Nigeria.</a></p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={img5} />
            </td>
            <td>
              <p><a href="https://www.chamsswitch.com/">www.chamsswitch.com</a></p>
            </td>
          </tr>

        </tr>
        <tr>

        </tr>
        <tr>
          <td></td>
          <td className="socials">
            <a href=""><img className="social_icon" src={img6} /></a>
            <a href=""><img className="social_icon" src={img7} /></a>
            <a href=""><img className="social_icon" src={img8} /></a>
            <a href=""><img className="social_icon" src={img9} /></a>
          </td>
        </tr>
        

      </table>
      <table>
        <tr>

          <td style={{ borderTop: "1px solid black", width: "800px" }}>
            <p>"Disclaimer:  The information transmitted is intended only for the person or entity to which it is addressed and may contain confidential and or privileged material.
              Any review, retransmission, dissemination, or other use or any action taken in reliance upon this information by persons or entities other than the intended recipient is prohibited. If you receive this mail in error, please contact the sender and delete the material from your Computer system."
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
