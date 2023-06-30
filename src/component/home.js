import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavbarComponent from "./navbar";
import Loading from "./loading";

const Home = () => {
  const url = "http://localhost:4000";
  const [screenData, setScreenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);

  const jwt_token = Cookies.get("jwt_token");
  const option = {
    method: "GET",
    headers: {
      authorization: `Bearer ${jwt_token}`,
    },
  };

  const navigate = useNavigate();

  const homePageFetchFn = async () => {
    const response = await fetch(url, option);
    const data = await response.json();
    setScreenData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((prevImg) =>
        prevImg === screenData.length - 1 ? 0 : prevImg + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [screenData]);

  useEffect(() => {
    jwt_token && homePageFetchFn();
  }, []);

  useEffect(() => {
    if (!jwt_token) {
      navigate("/login", { replace: true });
    }
  }, [jwt_token, navigate]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <NavbarComponent />
        <div className="carosalContainer">
          <img
            className="carosalImg"
            src={screenData[currentImg]?.img_url}
            alt="img"
          />
          <h1 className="carosalTitle">{screenData[currentImg]?.name}</h1>
          <button className="carosalBtn">Watch Now</button>
        </div>
      </>
    );
  }
};

export default Home;
