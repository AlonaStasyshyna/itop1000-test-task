import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;

  span {
    font-size: 24px;
    line-height: 1;
    font-weight: 700;
    color: #c9c9c9;
  }
`;

export const Select = styled.select`
  padding: 6px 14px 6px 6px;
  border: 0.5px solid #c9c9c9;
  font-family: inherit;
  font-size: 16px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 6px 14px 6px 6px;
  border: 0.5px solid #c9c9c9;
  font-family: inherit;
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 86px;
  left: 0;
  font-size: 12px;
  color: #a50b0b;
`;
