import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import { Container, TitleText, AnnotationInput } from './styles';

const Appointment: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Cancelar Inicio do Atendimento',
      headerTruncatedBackTitle: `Cancelar Inicio do Atendimento`,
      headerTitle: false,
      cardStyle: { backgroundColor: '#48dbfb' },
    });
  }, [navigation]);

  return (
    <Container>
      <TitleText>Observaçoes:</TitleText>
      <AnnotationInput />
    </Container>
  );
};

export default Appointment;
