import { useState } from "react";
import { Container, Previous, Screen, Current, Button } from "./Styled";

const Calculator = () => {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value = (e.target as Element).innerHTML;
    if (value === "." && current.includes(value)) return;
    setCurrent(current + value);
  };

  const handleDelete = (): void => {
    return current.length <= 1
      ? setCurrent("")
      : setCurrent(current.slice(0, -1));
  };

  const handleAllClear = (): void => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };

  const handleOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!current) return;
    if (previous) {
      const value = compute()?.toString();
      value && setPrevious(value);
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation((e.target as Element).innerHTML);
  };

  const equal = () => {
    const value = compute()?.toString();
    if (value === undefined || value === null) return;

    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  const compute = (): number | undefined => {
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    if (operation === "÷") return previousNumber / currentNumber;
    if (operation === "×") return previousNumber * currentNumber;
    if (operation === "+") return previousNumber + currentNumber;
    if (operation === "-") return previousNumber - currentNumber;
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {previous} {operation}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={handleAllClear} gridSpan={2} control>
        AC
      </Button>
      <Button onClick={handleDelete} control>
        DEL
      </Button>
      <Button onClick={handleOperation} operation>
        ÷
      </Button>
      <Button onClick={appendValue}>7</Button>
      <Button onClick={appendValue}>8</Button>
      <Button onClick={appendValue}>9</Button>
      <Button onClick={handleOperation} operation>
        ×
      </Button>
      <Button onClick={appendValue}>4</Button>
      <Button onClick={appendValue}>5</Button>
      <Button onClick={appendValue}>6</Button>
      <Button onClick={handleOperation} operation>
        +
      </Button>
      <Button onClick={appendValue}>1</Button>
      <Button onClick={appendValue}>2</Button>
      <Button onClick={appendValue}>3</Button>
      <Button onClick={handleOperation} operation>
        -
      </Button>
      <Button onClick={appendValue} period>
        .
      </Button>
      <Button onClick={appendValue}>0</Button>
      <Button onClick={equal} gridSpan={2} equal>
        =
      </Button>
    </Container>
  );
};

export default Calculator;