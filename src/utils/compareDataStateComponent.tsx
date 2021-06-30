/**
 * This function for compore data state in one compenent
 * just provide data props type (number, string, boolean, array, object, json)
 * @param prevProps previus data state in component
 * @param nextProps next data state in component
 * @returns result compare data props type boolean
 */
export const compareDataStateComponent = (
  prevProps: any,
  nextProps: any
): boolean => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};
