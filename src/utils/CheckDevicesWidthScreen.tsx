/**
 * DEFAULT BREAKPOINTS MATERIAL UI
 * value         |0px     600px    960px    1280px   1920px
 * key           |xs      sm       md       lg       xl
 * screen width  |--------|--------|--------|--------|-------->
 * range         |   xs   |   sm   |   md   |   lg   |   xl
 */

const CheckDevicesWidthScreen = (width: string | undefined) => {
  switch (width) {
    case 'xl':
      return {
        TV_VERY_BIG_SCREEN: true,
        DESKTOP_LEPTOP_SCREEN: true,
        TABLET_NOTEBOOK_SCREEN: false,
        MOBILE_SMALL_SCREEN: false,
        MOBILE_VERY_SMALL_SCRENN: false,
        IDEAL_GRID_SIZE_MASONRY: 4,
      };
    case 'lg':
      return {
        TV_VERY_BIG_SCREEN: true,
        DESKTOP_LEPTOP_SCREEN: true,
        TABLET_NOTEBOOK_SCREEN: false,
        MOBILE_SMALL_SCREEN: false,
        MOBILE_VERY_SMALL_SCRENN: false,
        IDEAL_GRID_SIZE_MASONRY: 2,
      };
    case 'md':
      return {
        TV_VERY_BIG_SCREEN: true,
        DESKTOP_LEPTOP_SCREEN: true,
        TABLET_NOTEBOOK_SCREEN: true,
        MOBILE_SMALL_SCREEN: false,
        MOBILE_VERY_SMALL_SCRENN: false,
        IDEAL_GRID_SIZE_MASONRY: 2,
      };
    case 'sm':
      return {
        TV_VERY_BIG_SCREEN: false,
        DESKTOP_LEPTOP_SCREEN: false,
        TABLET_NOTEBOOK_SCREEN: false,
        MOBILE_SMALL_SCREEN: true,
        MOBILE_VERY_SMALL_SCRENN: true,
        IDEAL_GRID_SIZE_MASONRY: 1,
      };
    case 'xs':
      return {
        TV_VERY_BIG_SCREEN: false,
        DESKTOP_LEPTOP_SCREEN: false,
        TABLET_NOTEBOOK_SCREEN: false,
        MOBILE_SMALL_SCREEN: true,
        MOBILE_VERY_SMALL_SCRENN: true,
        IDEAL_GRID_SIZE_MASONRY: 1,
      };
    default:
      return {
        TV_VERY_BIG_SCREEN: false,
        DESKTOP_LEPTOP_SCREEN: false,
        TABLET_NOTEBOOK_SCREEN: false,
        MOBILE_SMALL_SCREEN: false,
        MOBILE_VERY_SMALL_SCRENN: true,
        IDEAL_GRID_SIZE_MASONRY: 1,
      };
  }
};

export default CheckDevicesWidthScreen;
