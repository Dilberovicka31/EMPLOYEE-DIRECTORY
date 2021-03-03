/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faArrowDown} from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className="jumbotron jumbotron-fluid shadow p-3 mb-5 bg-white rounded">
      <div className="container">
        <h1 className="display-4 text-center">Employee Database</h1>
      </div>
      <div id="arrowicon" className="text-center mt-5 mh-100">
        <FontAwesomeIcon icon={faArrowDown} /></div>
      
    </div>
      
    

    )
    
        
    }
    export default Header;