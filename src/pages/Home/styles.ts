import styled from 'styled-components/native';

interface ButtonProps {
  bgColor: 'green' | 'orange' | 'red';
}

const colors = {
  green: '#2F855A',
  red: '#C53030',
  orange: '#ED8936',
};

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${props => colors[props.bgColor]};
  border-radius: 8px;
  margin: 16px 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
