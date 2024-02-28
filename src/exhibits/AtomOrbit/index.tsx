import { useEffect, useRef } from "react";
import * as S from "./styled";

interface IAtomProperty {
  radius: number;
  speed: number;
  angle: number;
}

const AtomOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const atomProperties = useRef<IAtomProperty[]>([
    {
      angle: 0,
      radius: 100,
      speed: 1.1,
    },
    {
      angle: 90,
      radius: 150,
      speed: 1,
    },
    {
      angle: 120,
      radius: 200,
      speed: 0.9,
    },
    {
      angle: 180,
      radius: 100,
      speed: 1.2,
    },
    {
      angle: 380,
      radius: 150,
      speed: 0.8,
    },
  ]);
  const orbitRadius = [100, 150, 200];

  useEffect(() => {
    const intervalId = setInterval(changeRadius, 3000);
    const animationId = requestAnimationFrame(rotate);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const changeRadius = () => {
    const index = getRandomInt(0, atomProperties.current.length - 1);
    atomProperties.current[index] = {
      ...atomProperties.current[index],
      radius: orbitRadius[getRandomInt(0, orbitRadius.length - 1)],
      speed: Math.random() + 0.5,
    };

    const container = containerRef.current;
    if (container) {
      container.style.opacity = "0.5";
      container.style.background = "white";
      setTimeout(() => {
        container.style.opacity = "1";
        container.style.background = "black";
      }, 100);
    }
  };

  const rotate = () => {
    const atoms = containerRef.current?.querySelectorAll("span");
    atomProperties.current.forEach((prop, index) => {
      const { angle, radius, speed } = prop;
      const radians = angle * (Math.PI / 180);
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      if (atoms && atoms[index]) {
        (atoms[index] as HTMLElement).style.left = `${x - 5}px`;
        (atoms[index] as HTMLElement).style.top = `${y - 5}px`;
        console.log(index);
      }

      atomProperties.current[index].angle = (angle + speed) % 360;
    });

    requestAnimationFrame(rotate);
  };

  return (
    <S.Container ref={containerRef}>
      <S.Orbit />
      <S.Orbit />
      <S.Orbit />
      <S.Center>
        <S.Atom />
        <S.Atom />
        <S.Atom />
        <S.Atom />
        <S.Atom />
      </S.Center>
    </S.Container>
  );
};

export default AtomOrbit;
