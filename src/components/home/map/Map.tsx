import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
    const [location, setLocation] = useState<any>(null);
    const [pickedLocation, setPickedLocation] = useState<any>(null);

    // Get user's current location
    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Location access is required to use this feature.');
                return;
            }

            const userLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        })();
    }, []);

    const handleSelectLocation = (event:any) => {
        const coords = event.nativeEvent.coordinate;
        setPickedLocation(coords);
    };

    const confirmLocation = () => {
        if (pickedLocation) {
            Alert.alert(
                'Location Selected',
                `Latitude: ${pickedLocation.latitude}, Longitude: ${pickedLocation.longitude}`
            );
        } else {
            Alert.alert('No Location Selected', 'Please select a location on the map.');
        }
    };

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={location}
                    onPress={handleSelectLocation}
                >
                    {pickedLocation && (
                        <Marker
                            coordinate={pickedLocation}
                            title="Selected Location"
                        />
                    )}
                </MapView>
            ) : (
                <Text>Loading Map...</Text>
            )}
            <Button title="Confirm Location" onPress={confirmLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default Map;
