import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "./navbar";
import Loading from "./loading";
import Card from "./card";

const Movie = () => {
  const [cardDatas, setcardDatas] = useState({ img_url: "", name: "" });
  const [isLoading, setIsLoading] = useState(true);
  const jwt_token = Cookies.get("jwt_token");
  const url = "http://localhost:4000/movie";
  const option = {
    method: "GET",
    headers: {
      authorization: `Bearer ${jwt_token}`,
    },
  };

  const fetchData = async () => {
    const response = await fetch(url, option);
    const data = await response.json();
    setcardDatas(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    jwt_token || navigate("/login", { replace: true });
  }, [navigate, jwt_token]);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <NavbarComponent />
        <div className="trendingContainer">
          <Card cardDatas={cardDatas} />
        </div>
      </>
    );
  }
};

export default Movie;
