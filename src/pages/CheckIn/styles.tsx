import styled from 'styled-components/native';

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

export const MapContainer = styled.View`
  flex: 1;
  display: flex;
  background-color: #333;
  align-self: stretch;
`;

export const AddressInput = styled.TextInput`
  align-self: stretch;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 30px;
  background-color: #fff;
`;

export const HourText = styled.Text`
  color: #2980b9;
  font-weight: bold;
  margin-top: 20px;
`;

export const CheckInButton = styled.TouchableOpacity`
  align-self: stretch;
  background-color: #2980b9;
  padding: 20px;
  margin: 20px 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckInButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
