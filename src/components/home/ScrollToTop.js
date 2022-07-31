import React, { useState } from "react";

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
      <img class="img-fluid img-thumbnail bg-info" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzM0LjA3IDMyMy4xMnYxNi4zMjRoODMuODQ4di0xNi4zMjR6bTAgNjUuMjIzaDMzLjc1OHYzNS44MTJoMTYuMzMydi0zNS44MTJoMzMuNzU0bC00MS45MjItNDEuOTIyeiIvPgo8L3N2Zz4K" style={{height:5 + 'rem', width: 5 + 'rem', }} alt="logo" />
    </toTop>
  );
}