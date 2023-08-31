import SearchBar from "./components/SearchBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="text-center mt-4 fs-1 fw-bold">URL SHORTENER</h1>
      <Container>
        <SearchBar />
      </Container>
    </div>
  )
}

export default App;
