import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animation";
const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const loadDetailHandler = (id) => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  //Get the data back from the state
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <div>
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <Games>
            {searched.map((game) => (
              <StyledGame
                variants={popup}
                initial="hidden"
                animate="show"
                layoutId={game.id.toString()}
                onClick={() => loadDetailHandler(game.id)}
                key={game.id}
              >
                <Link to={`/game/${game.id}`}>
                  <motion.h3 layoutId={`title ${game.id.toString()}`}>
                    {game.name}
                  </motion.h3>
                  <p>{game.released}</p>
                  <motion.img
                    layoutId={`image ${game.id.toString()}`}
                    src={smallImage(game.background_image, 640)}
                    alt={game.name}
                  />
                </Link>
              </StyledGame>
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <StyledGame
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={game.id.toString()}
            onClick={() => loadDetailHandler(game.id)}
            key={game.id}
          >
            <Link to={`/game/${game.id}`}>
              <motion.h3 layoutId={`title ${game.id.toString()}`}>
                {game.name}
              </motion.h3>
              <p>{game.released}</p>
              <motion.img
                layoutId={`image ${game.id.toString()}`}
                src={smallImage(game.background_image, 640)}
                alt={game.name}
              />
            </Link>
          </StyledGame>
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <StyledGame
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={game.id.toString()}
            onClick={() => loadDetailHandler(game.id)}
            key={game.id}
          >
            <Link to={`/game/${game.id}`}>
              <motion.h3 layoutId={`title ${game.id.toString()}`}>
                {game.name}
              </motion.h3>
              <p>{game.released}</p>
              <motion.img
                layoutId={`image ${game.id.toString()}`}
                src={smallImage(game.background_image, 640)}
                alt={game.name}
              />
            </Link>
          </StyledGame>
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <StyledGame
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={game.id.toString()}
            onClick={() => loadDetailHandler(game.id)}
            key={game.id}
          >
            <Link to={`/game/${game.id}`}>
              <motion.h3 layoutId={`title ${game.id.toString()}`}>
                {game.name}
              </motion.h3>
              <p>{game.released}</p>
              <motion.img
                layoutId={`image ${game.id.toString()}`}
                src={smallImage(game.background_image, 640)}
                alt={game.name}
              />
            </Link>
          </StyledGame>
        ))}
      </Games>
    </div>
  );
};
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2.5rem;
  @media (max-width: 816px) {
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media (max-width: 305px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  a {
    width: 0;
    height: 0;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
