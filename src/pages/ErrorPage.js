import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <>
        <header>
            <NavBar/>
            <h1>Oops! Looks like something went wrong.</h1>
        </header>
        </>
    );
}
export default ErrorPage;