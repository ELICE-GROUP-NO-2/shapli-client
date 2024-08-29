import React from "react";
import * as S from "./style";

export default function HomePage() {
  return (
    <S.ExampleDiv>
      <h1>안녕하세요??? </h1>
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
