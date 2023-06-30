import NavbarComponent from "./navbar";

const Loading = () => {
  return (
    <>
      <NavbarComponent />
      <div className="loading-img-container">
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          className="loading-img"
          alt="loading..."
        ></img>
      </div>
    </>
  );
};

export default Loading;
