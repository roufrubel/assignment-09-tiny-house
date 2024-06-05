import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center mt-10 space-y-6">
            <h1 className="font-bold text-3xl text-orange-600">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'><button className="text-white btn btn-primary font-bold mt-6">Go Back Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;