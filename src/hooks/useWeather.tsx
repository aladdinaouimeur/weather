import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROUTES, RootStackParamList} from '../constants/routes';
import {useAppSelector} from '../store/hooks';
import {selectSelectedLocation} from '../store/weatherSlice';
import {useGetWeatherByCoordinatesQuery} from '../services/weatherApi';
import {skipToken} from '@reduxjs/toolkit/query';

export const useWeather = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const selectedLocation = useAppSelector(selectSelectedLocation);

  const {data: weatherData} = useGetWeatherByCoordinatesQuery(
    selectedLocation ? {...selectedLocation} : skipToken,
  );

  const navigateToSearch = () => {
    navigate(ROUTES.SearchScreen);
  };

  return {selectedLocation, navigateToSearch, weatherData};
};
