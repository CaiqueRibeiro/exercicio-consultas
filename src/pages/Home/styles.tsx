import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Appointment {
  address: string;
  patientName: string;
  dateTime: string;
  state: string;
}

export const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderImage = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const HeaderText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 10px;
`;

export const TitleText = styled.Text`
  color: #3498db;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
`;

export const AppointmentsList = styled(
  FlatList as new () => FlatList<Appointment>,
)`
  flex: 1;
  align-self: stretch;
  padding: 0 10px;
`;

export const AppointmentContainer = styled.TouchableOpacity`
  height: 150px;
  background-color: #2980b9;
  border-radius: 5px;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 10px;
`;

export const AppointmentText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
