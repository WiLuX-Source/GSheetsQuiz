import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./routes";
import Question from "./routes/question";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;