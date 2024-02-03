import resizeArray from "./resizeArray";

const selectExhibits = <T>(
  exhibits: T[],
  arrayNum: number,
  itemNum: number
): T[][] => {
  const result: T[][] = [];
  const elementSize = arrayNum * itemNum;
  const resizedExhibits = resizeArray(exhibits, elementSize);

  for (let i = 0; i < elementSize; i += itemNum)
    result.push(resizedExhibits.slice(i, i + itemNum));

  return result;
};

export default selectExhibits;
