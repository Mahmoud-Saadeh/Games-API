import React from "react";

//COMPONENTS
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//STYLES AND ANIMATION
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <Game />
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 2.5rem 0rem;
  }
  @media (max-width: 420px) {
    padding: 0rem 1.5rem;
    h2 {
      padding: 1rem 0rem;
    }
  }
`;

export default Home;
