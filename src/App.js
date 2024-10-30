import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';

import Invoice1 from './components/invoice1'
import Invoice from './components/invoice'
import Invoice2 from './components/invoice2';
import Invoice3 from './components/invoice3';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './components/create';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Invoice />}
                    />
                    <Route
                        exact
                        path="/invoice1"
                        element={<Invoice1 />}
                    />
                    <Route
                        exact
                        path="/invoice2"
                        element={<Invoice2 />}
                    />
                     <Route
                        exact
                        path="/invoice3"
                        element={<Invoice3 />}
                    />
                    <Route
                        exact
                        path="/create"
                        element={<Create />}
                    />
                   
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
