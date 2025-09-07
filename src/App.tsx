import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./routes";
import Question from "./routes/question";
import Result from "./routes/results";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/question" element={<Question />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;