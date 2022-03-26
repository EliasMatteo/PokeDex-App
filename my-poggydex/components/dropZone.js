//dropzone
// import { TouchBackend } from "react-dnd-touch-backend";
// //import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from "react-dnd";
// import { useDrag, useDrop } from "react-dnd";

const Dropzone = ({
  children = null,
  onDropItem = () => {},
  position = "fixed",
}) => {
  //drag and drop work in progress
  //   const [{ canDrop, isOver }, drop] = useDrop(() => ({
  //     // The type (or types) to accept - strings or symbols
  //     accept: "pokeCard",
  //     drop: (item, monitor) => {
  //       console.log("item that was dropped", item);
  //       onDropItem(item);
  //     },
  //     // Props to collect
  //     collect: (monitor) => ({
  //       isOver: monitor.isOver(),
  //       canDrop: monitor.canDrop(),
  //     }),
  //   }));
  return (
    <div ref={drop} pos={position} className="drop-cont">
      {/* {children} */}
    </div>
  );
};

export default Dropzone;
