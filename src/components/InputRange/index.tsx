import { ChangeEvent } from "react";
import * as S from "./styled";

interface IInputRangeProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputRange = ({ value, min, max, step, onChange }: IInputRangeProps) => {
  return (
    <S.Wrapper>
      <S.ValueDisplay>{value}</S.ValueDisplay>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default InputRange;