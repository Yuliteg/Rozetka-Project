import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "4rem",
        height: "4rem",
        color: "gray",
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
