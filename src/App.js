import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: block;
  padding : 0 clac(3.5vw + 5px);
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  position: relative;
  top:72px;

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`