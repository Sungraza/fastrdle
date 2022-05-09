import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    return (
        <Navbar bg="light" fixed="top">
            <Navbar.Text className="Header" style={{ color: "black", verticalAlign: "middle" }}>
                <strong>Fastrdle</strong>
            </Navbar.Text>
            <Navbar.Text className="Repository">
                <a href="https://github.com/razairl/fastrdle">
                    <FontAwesomeIcon icon={faFileCode} size="lg" />
                </a>
            </Navbar.Text>
        </Navbar>
    )
}

export default Header;
