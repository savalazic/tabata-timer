import styled from 'styled-components';

const Input = styled.input`
  padding: 20px 35px;
  font-size: 25px;
  outline: none;
  background-color: #f5f5f5;
  border: none;
  border-radius: 40px;
  display: block;
  margin-bottom: 40px;

  transition: background-color 300ms;

  &:focus {
    background-color: #eee;
  }
`;

export { Input };
