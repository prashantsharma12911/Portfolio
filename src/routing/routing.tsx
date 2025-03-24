import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {path : '/',element : <HomePage/>},
    {path : '/projects' , element : <Projects/>}
]);
export default router ;