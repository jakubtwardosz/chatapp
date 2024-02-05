import { Col, Row, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingroom';

function App() {
  return (
    <div>
      <Container>
        <Row class='px-5 mx-5'>
          <Col sm='12'>
            <h1 className='font-weight-light'>Hello!</h1>
          </Col>
        </Row>
        <WaitingRoom></WaitingRoom>
      </Container>
    </div>
  );
}

export default App;
