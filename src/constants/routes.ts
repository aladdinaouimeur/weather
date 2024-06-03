export const enum ROUTES {
  SearchScreen = 'SEARCH_SCREEN',
  HomeScreen = 'HOME_SCREEN',
}

export type RootStackParamList = {
  [ROUTES.SearchScreen]: undefined;
  [ROUTES.HomeScreen]: undefined;
};
