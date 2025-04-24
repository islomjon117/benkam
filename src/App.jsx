import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ServisesPage from "./pages/ServisesPage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";
import JobPage from "./pages/JobPage";
import UsaPage from "./pages/UsaPage";
import { FilterContextProvider } from "./components/context/Context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayouts />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/servises" element={<ServisesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/usa" element={<UsaPage/>}/>
    </Route>
  )
);

function App() {
  return (
    <FilterContextProvider>
      <RouterProvider router={router} />
    </FilterContextProvider>
  );
}

export default App;
