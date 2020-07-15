import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import {
  Container,
  TitleText,
  MapContainer,
  AddressInput,
  HourText,
  CheckInButton,
  CheckInButtonText,
} from './styles';

interface Appointment {
  address: string;
  patientName: string;
  dateTime: string;
  state: string;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyBK1akj5H-Bsotsgo1eN7Qp67lJ-zn306A';

const CheckIn: React.FC = () => {
  const [myPosition, setMyPosition] = useState({ latitude: 0, longitude: 0 });
  const [clientPosition, setClientPosition] = useState({
    address: '',
    latitude: 0,
    longitude: 0,
  });

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    Geocoder.init(GOOGLE_MAPS_API_KEY);

    Geocoder.from(route.params.appointment.address).then(json => {
      const clientData = {
        address: route.params.appointment.address,
        latitude: json.results[0].geometry.location.lat,
        longitude: json.results[0].geometry.location.lng,
      };

      setClientPosition(clientData);
    });
  }, [clientPosition.address, route.params.appointment.address]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setMyPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      err => Alert.alert(JSON.stringify(err)),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
    );
  }, [myPosition]);

  function handleChangePatientPosition(value: string): void {
    const newData = {
      address: value,
      latitude: clientPosition.latitude,
      longitude: clientPosition.longitude,
    };
    setClientPosition(newData);
  }
  return (
    <Container>
      <TitleText>{route.params.appointment.patientName}</TitleText>
      <AddressInput
        placeholder="Endereco"
        onChangeText={value => handleChangePatientPosition(value)}
        value={clientPosition.address}
      />
      <MapContainer>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: myPosition.latitude,
            longitude: myPosition.longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}
          showsUserLocation
          loadingEnabled
          toolbarEnabled
          zoomControlEnabled
        >
          <Marker
            coordinate={{
              latitude: myPosition.latitude,
              longitude: myPosition.longitude,
            }}
          >
            <Callout>
              <TitleText>Sua localizaçao</TitleText>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: clientPosition.latitude,
              longitude: clientPosition.longitude,
            }}
          >
            <Callout>
              <TitleText>Localizacao do cliente</TitleText>
            </Callout>
          </Marker>

          <MapViewDirections
            origin={{
              latitude: myPosition.latitude,
              longitude: myPosition.longitude,
            }}
            destination={{
              latitude: clientPosition.latitude,
              longitude: clientPosition.longitude,
            }}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="#3498db"
          />
        </MapView>
      </MapContainer>

      <HourText>{route.params.appointment.dateTime}</HourText>

      <CheckInButton
        onPress={() =>
          navigation.navigate('Appointment', {
            appointment: route.params.appointment,
          })
        }
      >
        <CheckInButtonText>Check-in</CheckInButtonText>
      </CheckInButton>
    </Container>
  );
};

export default CheckIn;
