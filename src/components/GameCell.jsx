import SelectedIcon from "../assets/selected.png";

const GameCell = ({
  value,
  selected,
  setBoardCells,
  selectionCount,
  setSelectionCount,
}) => {
  const maxSelection = 6; //Max Board Nos Selection Count

  function selectionChanged(e) {
    //6 Nos selected. No further selection allowed
    if (selectionCount === maxSelection && !selected) return;

    //Update the selection count
    setSelectionCount((prev) => (selected ? --prev : ++prev));

    //Update the Cell value for selection
    setBoardCells((prev) =>
      prev.map((cell) =>
        cell.no === value ? { ...cell, selected: !cell.selected } : cell
      )
    );
  }

  return (
    <div
      className={`game-cell  ${
        selectionCount === maxSelection && !selected ? "cell-disabled" : " "
      } `}
      onClick={selectionChanged}
    >
      {selected && (
        <img src={SelectedIcon} alt="Cell selected Icon" className="sel-icon" />
      )}
      {!selected && <span className="cell-value">{value}</span>}
    </div>
  );
};

export default GameCell;
