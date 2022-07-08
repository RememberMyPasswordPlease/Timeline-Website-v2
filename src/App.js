import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home, Layout, TimelinePage, Biblio } from "./pages"
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/bibliography" element={<Biblio />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
