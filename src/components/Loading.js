import { Spinner } from "reactstrap";

const Loading = () => {
    return (
    <div className="d-flex justify-content-center">
         <Spinner animation="border" variant="secondary" role="status"/>
         <h3 className="text-align-center">
            Loading
        </h3>
    </div>)
};

export default Loading;