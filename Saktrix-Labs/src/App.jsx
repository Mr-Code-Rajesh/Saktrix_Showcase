import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import {ComponentsPage} from "./Pages/ComponentsPage";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import { RootLayout } from './Layout/RootLayout';
import ShowcasePage from './ComponentPage/pages/ShowcasePage';

function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="components" element={<ShowcasePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* External GitHub redirect */}
      <Route
        path="github"
        element={() => {
          window.location.href = "https://github.com/your-username/saktrix-showcase";
          return null;
        }}
      />
    </Route>
  )
);

  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
