import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xpox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import xpoxSX from "../img/xbox-series-x-seeklogo.com.svg";

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  //EXIT DETAIL
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
    if (element.classList.contains("close")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox Series S/X":
        return xpoxSX;
      case "Xbox One":
        return xpox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };
  //GET STARS
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Close className="close">
              <span className="line1"></span>
              <span className="line2"></span>
            </Close>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const Close = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background: #dd0e0e;
    .line1 {
      background: #fff;
    }
    .line2 {
      background: #fff;
    }
  }
  .line1 {
    width: 20px;
    position: absolute;

    display: block;
    transform: translateY(-50%);
    transform: rotateZ(45deg);
    height: 1px;
    background: #000;
    z-index: 12;
  }
  .line2 {
    position: absolute;
    width: 20px;
    transform: translateY(-50%);

    display: block;
    transform: rotateZ(135deg);
    height: 1px;
    background: #000;
    z-index: 12;
  }
`;
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  @media (max-width: 385px) {
    h2,
    h3 {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 822px) {
    padding: 2rem 2.5rem;
  }
  @media (max-width: 560px) {
    padding: 0.5rem 1rem;
  }
  img {
    width: 100%;
    display: inline;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  @media (max-width: 560px) {
    .rating {
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 1rem;
    width: 50px;
    color: gray;
    @media (max-width: 662px) {
      margin-left: 0.1rem;
      width: 30px;
    }
  }
  @media (max-width: 385px) {
    flex-direction: column;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 385px) {
    margin-top: 1rem;
  }
  @media (max-width: 822px) {
    margin-top: 3rem;
  }
  @media (max-width: 560px) {
    margin-top: 2rem;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 385px) {
    margin: 1rem 0rem;
  }
  @media (max-width: 822px) {
    margin: 3rem 0rem;
    p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
  @media (max-width: 560px) {
    margin: 2rem 0rem;
  }
`;

export default GameDetail;
