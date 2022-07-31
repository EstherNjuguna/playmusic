import React, { useState } from "react";
import {AiOutlineCaretUp} from "react-icons/ai";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <toTop onClick={toTop} scrollState={scrollState}>
<AiOutlineCaretUp style={{color: 'black', fontSize: '20px'}} />
    </toTop>
  );
}