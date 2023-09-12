import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { PageNotFound } from "./pages/PageNotFound";
import { MainLayout } from "./layout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
