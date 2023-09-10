import { css } from "@emotion/react";

// 반응형 모바일 웹앱 자동 조정을 위한 Screen Size Auto Setting

// 기준 화면 너비
export const initVwViewport = 450;

// pixel을 vw로 변환해주는 함수
const getVw = (px) => `${(px / (initVwViewport * 0.01 * 1)) * 1}vw`;

// 최대 화면 크기에 따라 반응형 스타일을 적용
const SCREEN = (content) => css`
  @media (max-width: ${initVwViewport}px) {
    ${content}
  }
`;

export const setVw = (property, px) =>
  typeof px == "number"
    ? css`
        ${`${property}: ${px}px`};
        ${SCREEN(css`
          ${property}: ${getVw(px)};
        `)};
      `
    : css`
        ${`${property}: ${px}`};
      `;

export const setVwMulti = (property, pxs) => css`
  ${`${property}: ${pxs.map((px) => `${px}px`).join(" ")}`};
  ${SCREEN(css`
    ${property}: ${pxs.map((px) => getVw(px)).join(" ")};
  `)};
`;

export const initVhViewport = 1080;

const getVh = (px) => `${(px / (initVhViewport * 0.01 * 1)) * 1}vh`;

const SCREEN_1 = (content) => css`
  @media (max-height: ${initVhViewport}px) {
    ${content}
  }
`;

export const setVh = (property, px) =>
  typeof px == "number"
    ? css`
        ${`${property}: ${px}px`};
        ${SCREEN_1(css`
          ${property}: ${getVh(px)};
        `)};
      `
    : css`
        ${`${property}: ${px}`};
      `;
