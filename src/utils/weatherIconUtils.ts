import {Lotties} from '../constants/lotties';

export const getLottieFromWeatherIcon = (iconCode: string) => {
  //Dumb implementation please ignore
  const mapping = {
    '01d': Lotties.clear.day, // clear sky
    '01n': Lotties.clear.night,
    '02d': Lotties.cloudy.day, // few clouds
    '02n': Lotties.cloudy.night,
    '03d': Lotties.cloudy.day, // scattered clouds
    '03n': Lotties.cloudy.night,
    '04d': Lotties.cloudy.day, // broken clouds
    '04n': Lotties.cloudy.night,
    '09d': Lotties.rain.day, // shower rain
    '09n': Lotties.rain.night,
    '10d': Lotties.rain.day, // rain
    '10n': Lotties.rain.night,
    '11d': Lotties.rain.day, // thunderstorm (mapped to rain)
    '11n': Lotties.rain.night,
    '13d': Lotties.rain.day, // snow (mapped to rain)
    '13n': Lotties.rain.night,
    '50d': Lotties.cloudy.day, // mist (mapped to cloudy)
    '50n': Lotties.cloudy.night,
  };
  // Also ignore the TS warning
  return mapping[iconCode] || null;
};
