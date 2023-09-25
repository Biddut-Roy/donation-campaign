import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    return (
        <div className=" mt-20 text-center" id="error-page">
        <h1 className=" text-3xl font-semibold">Oops!</h1>
        <p className=" text-4xl font-bold my-3">404</p>
        <p className=" text-2xl font-medium"> Page Not Found</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div>
    );
};

export default Error;