import React from 'react';
import {Animated, Dimensions} from 'react-native';

import {Container, Message, Progress, Status, Title} from './styles';

interface AlertProps {
  title: string;
  message?: string;
  status: 'success' | 'error' | 'warning';
}

export const Alert: React.FC<AlertProps> = ({message, title, status}) => {
  const height = new Animated.Value(0);
  const width = new Animated.Value(0);

  Animated.sequence([
    Animated.timing(height, {
      toValue: 120,
      duration: 500,
      useNativeDriver: false,
    }),
    Animated.timing(width, {
      toValue: Dimensions.get('screen').width,
      duration: 2500,
      useNativeDriver: false,
    }),
  ]).start();
  return (
    <>
      <Status status={status} />
      <Container
        status={status}
        style={{
          height,
        }}>
        <Title>{title}</Title>
        <Message numberOfLines={2}>{message}</Message>
        <Progress style={{width}} status={status} />
      </Container>
    </>
  );
};
