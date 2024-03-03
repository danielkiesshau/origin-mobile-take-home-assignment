import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Button = styled.TouchableOpacity`
  height: 50;
  width: 100;
  background-color: blue;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
const Label = styled.Text`
  font-size: 16;
  color: white;
`;

export default {
  Container,
  Button,
  Label,
};
