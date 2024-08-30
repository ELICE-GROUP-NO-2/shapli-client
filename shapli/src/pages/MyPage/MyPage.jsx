import React from "react";
import * as S from "./style";

export default function MyPage() {
  return (
    <S.ExampleDiv>
      <h1>마이페이지입니다. </h1>
      <S.ExampleButton
        type="button"
        onClick={() => {
          console.log("good");
        }}
      >
        버튼 예시
      </S.ExampleButton>
    </S.ExampleDiv>
  );
}
