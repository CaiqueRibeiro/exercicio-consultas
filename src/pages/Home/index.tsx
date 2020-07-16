import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import {
  HeaderContainer,
  HeaderImage,
  HeaderText,
  Container,
  TitleText,
  AppointmentsList,
  AppointmentContainer,
  AppointmentText,
} from './styles';

import api from '../../services/api';

interface Appointment {
  address: string;
  patientName: string;
  dateTime: string;
  state: string;
}

const HeaderTitle: React.FC = () => (
  <HeaderContainer>
    <HeaderImage
      source={{ uri: 'https://api.adorable.io/avatars/40/abott@adorable.png' }}
    />
    <HeaderText>Dr. Robson Soares</HeaderText>
  </HeaderContainer>
);

const Home: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('/appointments').then(response => {
      setAppointments(response.data);
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerTitle: <HeaderTitle /> });
  }, [navigation]);

  return (
    <Container>
      <TitleText>Próximas Visitas</TitleText>
      <AppointmentsList
        data={appointments}
        keyExtractor={item => item.patientName}
        renderItem={({ item }) => (
          <AppointmentContainer
            onPress={() =>
              navigation.navigate('CheckIn', { appointment: item })
            }
          >
            <AppointmentText>
              <Text style={{ fontWeight: 'bold' }}>PACIENTE: </Text>
              {item.patientName}
            </AppointmentText>
            <AppointmentText>
              <Text style={{ fontWeight: 'bold' }}>ENDEREÇO: </Text>
              {item.address}
            </AppointmentText>
            <AppointmentText>
              <Text style={{ fontWeight: 'bold' }}>DATA / HORA: </Text>
              {item.dateTime}
            </AppointmentText>
          </AppointmentContainer>
        )}
      />
    </Container>
  );
};

export default Home;
