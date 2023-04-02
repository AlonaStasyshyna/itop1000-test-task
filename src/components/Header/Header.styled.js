import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 10px;
  padding-right: 60px;
  font-size: 45px;
  color: #c9c9c9;
`;

export const Date = styled.p`
  margin-bottom: 28px;
  font-size: 18px;
  font-weight: 500;
`;

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 24px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    display: block;
    width: 0;
    height: 109%;
    border: 0.5px solid #c9c9c9;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translate(-50%);
    display: block;
    width: 98%;
    height: 0;
    border: 0.5px solid #c9c9c9;
  }
`;

export const Text = styled.p`
  font-weight: 500;

  span {
    margin-left: 10px;
    color: #c9c9c9;
  }
`;
