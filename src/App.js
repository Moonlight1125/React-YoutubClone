import Header from "./components/Header";
import Recommend from "./components/Recommend";
import Sivdevar from "./components/Sivdevar";
import Video from "./components/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Sivdevar/>
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Recommend/>}/>
        <Route path="/video/:id" element={<Video/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
