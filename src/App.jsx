import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
