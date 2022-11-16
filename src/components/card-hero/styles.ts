import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  :hover {
    .card__overlay,
    .card__header {
      transform: translateY(0);
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 60rem;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(40 * 1px);

  transform: translateY(100%);
  transition: 0.2s ease-in-out;
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.grey};
  `}
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(40 * 1px) 0 0 0;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.grey};
  `}
`;

export const CardArc = styled.svg`
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
  ${({ theme }) => css`
    width: ${theme.spacings.xxlarge};
    height: ${theme.spacings.xxlarge};
  `}
  path {
    ${({ theme }) => css`
      fill: ${theme.colors.neutral.grey};
    `}
    d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
  }
`;

export const CardThumb = styled.img`
  flex-shrink: 0;

  border-radius: 50%;
  ${({ theme }) => css`
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
  `}
`;

export const CardTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 0.3em;
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${theme.colors.neutral.black};
    font-weight: ${theme.font.bold};
  `}
`;

export const CardDescription = styled.div`
  padding: 0 2em 2em;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  ${({ theme }) => css`
    color: ${theme.colors.neutral.black};
  `}
`;

export const UserData = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 6px;
  list-style: none;
  span {
    font-weight: bold;
  }
`;

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
