import { createContext, useState, useEffect } from "react";

const GameContext = createContext({});

const GameWrapper = ({ children }) => {
  const maxSelection = 6; //Max Board Nos Selection Count
  const boardCellsCount = 49; //Board Nos Count
  const [lottoSelStore, setLottoSelStore] = useState([]); //Maintains the localStorage of lotto Selection
  const [boardCells, setBoardCells] = useState([]); //Board cells of nos

  useEffect(() => {
    try {
      //Get the Old selection from the Local Storage
      let lottoStr = localStorage.getItem("lottoSelection");
      let lottoSelection = lottoStr ? JSON.parse(lottoStr) : [];

      if (!Array.isArray(lottoSelection)) {
        console.error("Error getting the Local Storage:", error);
        lottoSelection = [];
      }

      setLottoSelStore(lottoSelection);

      //Initialize the game board with Cell no & its state
      let cells = Array.from({ length: boardCellsCount }, (v, i) => {
        //Each cell will hold a Number & Selection state
        //If the no preselected in localStorage then set as selected
        const preSelection = lottoSelection.indexOf(i + 1) >= 0 ? true : false;

        return {
          no: i + 1,
          selected: preSelection,
        };
      });
      setBoardCells(cells);
    } catch (error) {
      console.error("Error setting up the game board:", error);

      //We re-set the whole game & build a new game

      localStorage.removeItem("lottoSelection"); //Remove the LocalStorage
      setLottoSelStore([]);
      let cells = Array.from({ length: boardCellsCount }, (v, i) => {
        return {
          no: i + 1,
          selected: false,
        };
      });
      setBoardCells(cells);
    }
  }, [boardCellsCount]);

  return (
    <GameContext.Provider
      value={{
        boardCells,
        setBoardCells,
        maxSelection,
        lottoSelStore,
        setLottoSelStore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameWrapper };
