import { Button, ButtonGroup } from "react-bootstrap";

export const ButtonQuantity = (p: {
  units: number;
  setUnits: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const increaseUnits = () => {
    p.setUnits(p.units + 1);
  };
  const decreaseUnits = () => {
    if (p.units > 1) {
      p.setUnits(p.units - 1);
    }
  };
  return (
    <ButtonGroup>
      <Button onClick={decreaseUnits} variant="light">
        -
      </Button>
      <Button variant="light" disabled>
        {p.units}
      </Button>
      <Button onClick={increaseUnits} variant="light">
        +
      </Button>
    </ButtonGroup>
  );
};
