import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        {/* 컴포넌트 나누는 이유
        : 한 컴포넌트에 모든 state를 넣게 되면, 하나의 state가 변경될 때, 전체 컴포넌트가 렌더링 됨
        컴포넌트를 잘게 나눠 변경 사항이 있는 컴포넌트만 렌더링 되게 함으로써, 렌더링 최소화 */}
        <Navbar />
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default Sidebar;
