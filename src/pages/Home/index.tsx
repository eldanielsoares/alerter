import React from 'react';
import {useAlerter} from '../../contexts/AlerterContextProvider';

import {Button, Container, Text} from './styles';

export const Home: React.FC = () => {
  const {onShow} = useAlerter();
  return (
    <Container>
      {/* Botão de sucesso */}
      <Button
        bgColor={'green'}
        onPress={() => {
          onShow({
            status: 'success',
            title: 'Deu tudo certo!',
            message:
              'Em alguns instantes você será direcionado para o próximo passo ',
          });
        }}>
        <Text>Sucesso</Text>
      </Button>
      {/* Botão de erro */}
      <Button
        bgColor={'red'}
        onPress={() => {
          onShow({
            status: 'error',
            title: 'Ops!',
            message: 'Algo deu errado, por favor tente novamente ',
          });
        }}>
        <Text>Erro</Text>
      </Button>
      {/* Botão de aviso */}
      <Button
        bgColor={'orange'}
        onPress={() => {
          onShow({
            status: 'warning',
            title: 'Uow!',
            message: 'Se você sair sem salvar, perderá tudo',
          });
        }}>
        <Text>Aviso</Text>
      </Button>
    </Container>
  );
};
