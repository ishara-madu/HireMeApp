import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';

const Map = () => {
    const [location, setLocation] = useState<any>(null);
    const [pickedLocation, setPickedLocation] = useState<any>(null);
    const mapRef = useRef<MapView>(null);
    const [focusedLocation, setFocusedLocation] = useState<any>();

    const { theme } = useTheme();
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

    const handleSelectLocation = (event: any) => {
        const coords = event.nativeEvent.coordinate;
        setPickedLocation(coords);
    };

    const confirmLocation = async() => {
        // If no picked location, use the current location as default
        const finalLocation = pickedLocation || location;

        if (finalLocation) {
            try {
                const address = await Location.reverseGeocodeAsync({
                    latitude: finalLocation.latitude,
                    longitude: finalLocation.longitude,
                });

                if (address.length > 0) {
                    const { city, region, street, postalCode, country } = address[0];
                    Alert.alert(
                        'Location Selected',
                        `Address: ${street || 'N/A'}, ${city || 'N/A'}, ${region || 'N/A'}, ${postalCode || 'N/A'}, ${country || 'N/A'}`
                    );
                } else {
                    Alert.alert(
                        'Location Selected',
                        `Latitude: ${finalLocation.latitude}, Longitude: ${finalLocation.longitude}`
                    );
                }
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Failed to fetch address.');
            }
        } else {
            Alert.alert('No Location Available', 'Please wait while the location is being fetched.');
        }
    };

    const focusCurrentLocation = () => {
        if (location && mapRef.current) {
            const zoomedOutRegion = {
                ...location,
                latitudeDelta: location.latitudeDelta * 4, // Double the latitudeDelta
                longitudeDelta: location.longitudeDelta * 4, // Double the longitudeDelta
            };
            mapRef.current.animateToRegion(zoomedOutRegion, 1000);
            setFocusedLocation(true);
        } else {
            Alert.alert('Location not available', 'Please wait while the location is being fetched.');
        }
    };

    const handleMapMove = () => {
        setFocusedLocation(false);
    }

    return (
        <View className="w-full h-full relative bottom-28">
            {location ? (
                <MapView
                    ref={mapRef}
                    className={`h-full z-0`}
                    initialRegion={location}
                    onPress={handleSelectLocation}
                    onTouchMove={handleMapMove}
                    onDoublePress={handleMapMove}
                >

                    <View className={``}>
                        <Circle
                            center={location}
                            radius={2000}
                            strokeColor="rgba(0, 122, 255, 0.5)"
                            fillColor="rgba(0, 122, 255, 0.2)"
                        />
                        <Circle
                            center={location}
                            radius={20}
                            strokeColor="blue"
                            fillColor="blue"
                        />

                    </View>

                    {pickedLocation && (
                        <Marker
                            coordinate={pickedLocation}
                            title="Selected Location"
                            description="You have selected this location"
                            onPress={() => { setPickedLocation(null); handleMapMove() }}
                        />
                    )}
                </MapView>
            ) : (
                <Text className="text-center">Loading Map...</Text>
            )}

            {
                focusedLocation ? (
                    <TouchableOpacity onPress={focusCurrentLocation} className={`absolute right-3 bottom-20 bg-white w-12 h-12 justify-center items-center rounded-lg`} ><MaterialIcons name="my-location" size={24} color="black" /></TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={focusCurrentLocation} className={`absolute right-3 bottom-20 bg-white w-12 h-12 justify-center items-center rounded-lg`} ><MaterialIcons name="location-searching" size={24} color="black" /></TouchableOpacity>
                )
            }
            <View className={`w-full items-center absolute h-14 justify-center bottom-0`}>
                <TouchableOpacity onPress={confirmLocation} className={`${theme.bg_1} w-11/12 h-12 justify-center items-center rounded-md`} ><Text className={`text-xs font-bold ${theme.tx_2}`}>Pick this location</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Map;
