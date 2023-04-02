import { useEffect, useState } from 'react';
import {
  ErrorMessage,
  Form,
  Input,
  Label,
  Select,
} from './CurrencyConverterForm.styled';

export const CurrencyConverterForm = ({ rates }) => {
  const [firstRate, setFirstRate] = useState(0);
  const [secondRate, setSecondRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0.0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (firstRate && secondRate) {
      const calculation =
        (Number(amount) * Number(firstRate)) / Number(secondRate);

      setResult(calculation.toFixed(2));
    }
  }, [amount, firstRate, secondRate]);

  const changeCurrency = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstRate':
        setFirstRate(value);
        break;
      case 'secondRate':
        setSecondRate(value);
        break;
      default:
        break;
    }
  };

  const changeAmount = ({ target: { value } }) => {
    if (Number(value) < 0) {
      return setError(true);
    }

    setError(false);
    setAmount(Number(value));
  };

  return (
    <>
      <Form>
        <Label>
          <Select name="firstRate" onChange={changeCurrency}>
            <option value={firstRate}>Оберіть валюту</option>
            {rates
              .map(({ r030: id, txt, rate }) => (
                <option key={id} value={Number(rate)}>
                  {txt}
                </option>
              ))
              .reverse()}
          </Select>
          <Input
            type="number"
            name="amount"
            min="0"
            value={amount}
            onChange={changeAmount}
          />

          {error && <ErrorMessage>Please enter a positive number</ErrorMessage>}
        </Label>

        <span>&#10231;</span>

        <Label>
          <Select name="secondRate" onChange={changeCurrency}>
            <option value={secondRate}>Оберіть валюту</option>
            {rates.map(({ r030: id, txt, rate }) => (
              <option key={id} value={Number(rate)}>
                {txt}
              </option>
            ))}
          </Select>
          <Input type="number" name="result" value={result} disabled />
        </Label>
      </Form>
    </>
  );
};
