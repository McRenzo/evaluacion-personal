import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Areas from "./pages/Areas";
import Cargos from "./pages/Cargos";
import Fichas from "./pages/Fichas";
import Asignaciones from "./pages/Asignaciones";
import Evaluaciones from "./pages/Evaluaciones";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/cargos" element={<Cargos />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/asignaciones" element={<Asignaciones />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;