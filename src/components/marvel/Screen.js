import { HeroList } from "../heroes/HeroList";

export const Screen = () => {
  return (
    <div>
      <h1 className="text-center"> Marvel Screen</h1>
      <hr />
      <HeroList name="A" />
    </div>
  );
};
