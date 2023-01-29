import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem", color: "gray" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loading