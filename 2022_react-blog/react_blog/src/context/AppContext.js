import React from "react";

export default React.createContext({
  // 현재 선택된 게시물
  selectedPost: "",
  setSelectedPost: () => {},

  // 열려있는 게시물
  openPost: [],
  setOpenPost: () => {},

  // 게시물 데이터
  postData: [],

  //테마 변경
  theme: "",
  setTheme: () => {},

  // 현재 선택된 태그
  selectedTag: null,
  setSelectedTag: () => {},
});
