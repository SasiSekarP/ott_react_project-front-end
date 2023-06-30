const Card = (props) => {
  const { cardDatas } = props;

  return (
    <>
      {cardDatas.map((card, index) => {
        return (
          <div key={index}>
            <div className="trending-card">
              <img src={card.img_url} alt="img" className="card_img"></img>
              <div className="nameContainer">
                <div>{card.name}</div>
              </div>
              <div className="BtnContainer">
                <button type="button" className="trendingCardBtn">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
