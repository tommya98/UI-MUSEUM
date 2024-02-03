import shuffleArray from "./shuffleArray";

const resizeArray = <T>(array: T[], newSize: number): T[] => {
  const result: T[] = [];
  const length = array.length;
  const shuffledArray = shuffleArray(array);

  for (let i = 0; i < newSize; i++) result.push(shuffledArray[i % length]);

  return result;
};

export default resizeArray;
