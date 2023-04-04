import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Welcome to my home page</strong>
      <p>
        Start with{" "}
        <a rel="noopener noreferrer" href="/login">
          Login
        </a>{" "}
        or sign up{" "}
        <a rel="noopener noreferrer" href="/registration">
          Here
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
