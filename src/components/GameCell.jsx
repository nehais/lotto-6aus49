import SelectedIcon from "../assets/selected.png";

const GameCell = ({ value, selected, setBoardCells, selectionCompl }) => {
  function selectionChanged(e) {
    //6 Nos selected. No further selection allowed
    if (selectionCompl && !selected) return;

    setBoardCells((prev) =>
      prev.map((cell) =>
        cell.no === value ? { ...cell, selected: !cell.selected } : cell
      )
    );
  }

  return (
    <div
      className={`game-cell  ${
        selectionCompl && !selected ? "cell-disabled" : " "
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
