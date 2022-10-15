import {Animated, StatusBar} from 'react-native';
import styled from 'styled-components/native';

interface AlerterProps {
  status: 'success' | 'error' | 'warning';
}

const colors = {
  success: '#2F855A',
  error: '#C53030',
  warning: '#ED8936',
};

const colorsProgress = {
  success: '#68D391',
  error: '#FC8181',
  warning: '#F6AD55',
};

export const Status = styled(StatusBar).attrs<AlerterProps>(({status}) => ({
  backgroundColor: colors[status],
}))<AlerterProps>``;

export const Container = styled(Animated.View)<AlerterProps>`
  width: 100%;
  background-color: ${props => colors[props.status]};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 16px;
`;

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 24px;
  font-weight: 700;
`;

export const Message = styled.Text`
  color: #f1f1f1;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Progress = styled(Animated.View)<AlerterProps>`
  height: 8px;
  background-color: ${props => `${colorsProgress[props.status]}`};
  position: absolute;
  left: 0;
  bottom: 0;
`;
