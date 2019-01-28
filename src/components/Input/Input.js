import styled from 'styled-components';

const Input = styled.input`
  padding: 20px 35px;
  font-size: 25px;
  outline: none;
  background-color: #f5f5f5;
  border: none;
  border-radius: 40px;
  display: block;
  margin-bottom: 30px;

  transition: background-color 300ms;

  &::placeholder {
    transition: transform 300ms;
    transform: translateX(0);
  }

  &:focus {
    background-color: #eee;

    &::placeholder {
      transform: translate(4px);
    }
  }
`;

export { Input };
