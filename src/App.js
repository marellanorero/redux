import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Productos from "./Components/Productos";
import NuevoProducto from "./Components/NuevoProducto";
import EditarProducto from "./Components/EditarProducto";

//**Redux */
import { Provider } from "react-redux"; //**Desde donde fluyen los datos */
import store from "./store";

function App() {
  return (
    <Router>
    <Provider store={store}> //**con este provider todos los datos, todo lo que registremos, las funciones de nuestros reducers estarán disponibles en nuestro proyecto */ /
        <Header />
          <div className="container">
            <Routes >
              <Route path="/" element={<Productos/>}/>
              <Route path="/productos/nuevo" element={<NuevoProducto/>}/>
              <Route path="/productos/editar/:id" element={<EditarProducto/>}/>
            </Routes >
          </div>
        </Provider>
    </Router>
  );
}

export default App;
