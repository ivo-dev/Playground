import { useState, useEffect, useRef } from "react";

import st from "./styles.module.css";

const Expander = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const content = useRef();

  useEffect(() => {
    setContentHeight(getHeight());
  }, []);

  const getHeight = () => {
    return content.current.scrollHeight;
  };

  let opener;
  const output = [...children];
  children.forEach((item, index) => {
    if (item.props.opener) {
      opener = item;
      output.splice(index, 1);
    }
  });

  return (
    <>
      {opener ? (
        <div onClick={() => setExpanded(!expanded)}>{opener}</div>
      ) : (
        <button onClick={() => setExpanded(!expanded)}>
          Use the 'opener' prop to select an opener
        </button>
      )}

      <div
        className={st.content}
        ref={content}
        style={{
          maxHeight: expanded ? contentHeight : 0
        }}
      >
        {output}
      </div>
    </>
  );
};

export default Expander;
