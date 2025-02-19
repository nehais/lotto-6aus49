import { createContext, useState, useEffect } from "react";
import { LottoStorageUtils } from "../utils/LottoStorageUtils";

const GameContext = createContext({});

const GameWrapper = ({ children }) => {
  const maxSelection = 6; //Max Board Nos Selection Count
  const boardCellsCount = 49; //Board Nos Count
  const [lottoSelStore, setLottoSelStore] = useState([]); //Maintains the localStorage of lotto Selection
  const [boardCells, setBoardCells] = useState([]); //Board cells of nos

  useEffect(() => {
    //Get the Old selection from the Local Storage
    const lottoSelection = LottoStorageUtils.getItem();

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
