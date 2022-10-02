import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!!</h2>
            <p>This Page is Not Found</p>
            <Link to="/">Go to Home</Link>
        </div>

    );
}

export default NotFound;