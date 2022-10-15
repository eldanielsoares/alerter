import React from 'react';
import {useAlerter} from '../../contexts/AlerterContextProvider';

import {Button, Container, Text} from './styles';

export const Home: React.FC = () => {
  const {onShow} = useAlerter();
  return (
    <Container>
      <Button
        onPress={() => {
          onShow({
            status: 'success',
            title: 'Deu tudo certo!',
            message:
              'Em alguns instantes você será direcionado para o próximo passo ',
          });
        }}>
        <Text>Show</Text>
      </Button>
    </Container>
  );
};
