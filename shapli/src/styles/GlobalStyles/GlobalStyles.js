import { createGlobalStyle } from "styled-components";
import { Fonts } from "styles";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.thin}) format('truetype');
    font-weight: ${Fonts.weight.thin};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.extraLight}) format('truetype');
    font-weight: ${Fonts.weight.extraLight};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.light}) format('truetype');
    font-weight: ${Fonts.weight.light};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.regular}) format('truetype');
    font-weight: ${Fonts.weight.regular};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.medium}) format('truetype');
    font-weight: ${Fonts.weight.medium};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.SemiBold}) format('truetype');
    font-weight: ${Fonts.weight.SemiBold};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.Bold}) format('truetype');
    font-weight: ${Fonts.weight.Bold};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.ExtraBold}) format('truetype');
    font-weight: ${Fonts.weight.ExtraBold};
    font-style: normal;
  }

  @font-face {
    font-family: '${Fonts.family}';
    src: url(${Fonts.files.Black}) format('truetype');
    font-weight: ${Fonts.weight.Black};
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: '${Fonts.family}', sans-serif;
    font-weight: ${Fonts.weight.regular};
  }
`;

export default GlobalStyle;
