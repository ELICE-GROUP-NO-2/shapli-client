import * as Styled from './style';

/**
 * @param children: 버튼 내부에 들어갈 요소
 * @param type: 버튼 종류
 * @param onClick: 클릭 시 할 행동 (disable true일 시 undefined)
 * @param className: 추가 스타일링 (기본은 하얀색에 검정 글자)
 */


export default function BaseButton({children, type, onClick, className}) {
  return (
    <Styled.ButtonWrapper type={type} onClick={onClick} className={className}>
      {children}
    </Styled.ButtonWrapper>
  );
}

BaseButton.Styled = Styled.ButtonWrapper;