import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  background-color: blue;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
const Label = styled.Text`
  font-size: 16px;
  color: white;
`;

export default {
  Button,
  Label,
};
