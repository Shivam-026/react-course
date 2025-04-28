import { useRouteError } from "react-router";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooops!</h1>
            <h2>Something went wrong</h2>

            <h3>{err.status} : {err.statusText}s</h3>
        </div>
    );
};

export default Error;
