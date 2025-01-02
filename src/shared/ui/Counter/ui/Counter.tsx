import { FC } from "react";
import { Col, Row } from "../../grid";
import { Button } from "../../Button";
import cls from "./Counter.module.scss";

interface ICounterProps {
  value: number;
  setValue: (value: number) => void;
}

export const Counter: FC<ICounterProps> = (props) => {
  const disabledIncrement = props.value === 10;
  const disabledDecrement = props.value === 0;
  return (
    <Row align="center" justify="center">
      <Col>
        <Button
          size="m"
          disabled={disabledDecrement}
          className={cls.CounterButton}
          onClick={() => {
            props.setValue(props.value - 1);
          }}
        >
          -
        </Button>
      </Col>
      <Col>
        <span className={cls.CounterValue}>{props.value}</span>
      </Col>
      <Col>
        <Button
          size="m"
          className={cls.CounterButton}
          disabled={disabledIncrement}
          onClick={() => {
            props.setValue(props.value + 1);
          }}
        >
          +
        </Button>
      </Col>
    </Row>
  );
};
