import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Message = (props) => {
    return (
        <Container className="Message">
            <Alert size="sm" variant="success" onClose={() => document.getElementsByClassName("Message")[0].classList.remove("visible")} dismissible>
                <Alert.Heading className="headerText">
                    <strong>''</strong>
                </Alert.Heading>
                <p className="bodyText">
                    <strong>''</strong>
                </p>
            </Alert>
        </Container>
    )
}

export default Message;