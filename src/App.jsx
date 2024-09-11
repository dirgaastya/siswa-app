import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import NavbarDefault from './components/NavbarDefault';
import { router } from './router/index';

function App() {
  return (
    <Router>
      <MainLayout>
        <NavbarDefault />
        <Routes>
          {router.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
