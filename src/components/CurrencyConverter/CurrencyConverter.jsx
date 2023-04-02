import { useEffect, useState } from 'react';
import { CurrencyConverterForm } from 'components/CurrencyConverterForm/CurrencyConverterForm';
import { Title } from './CurrencyConverter.styled';

export const CurrencyConverter = ({ rates }) => {
  const [newRates, setNewRates] = useState([]);

  useEffect(() => {
    const uah = {
      r030: 980,
      txt: 'Українська гривня',
      rate: 1,
      cc: 'UAH',
      exchangedate: '',
    };

    setNewRates([...rates, uah]);
  }, [rates]);

  return (
    <main>
      <section>
        <Title>Конвертер валют</Title>

        <CurrencyConverterForm rates={newRates} />
      </section>
    </main>
  );
};
