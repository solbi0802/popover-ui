import "./App.css";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";

function App() {
  const referenceElement = useRef();
  const popoverRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popoverRef.current
  );
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <div ref={referenceElement} className="btn-section">
        <button onClick={onClickHandler} type="button">
          popover
        </button>
      </div>
      <div
        className={isOpen ? "popover" : "popover-hidden"}
        ref={popoverRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <p>
          And here's some amazing content. It's very engaging. Right? <br />
        </p>
      </div>
    </div>
  );
}

export default App;
