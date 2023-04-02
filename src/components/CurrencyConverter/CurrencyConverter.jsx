import { useEffect, useState } from 'react';
import { CurrencyConverterForm } from 'components/CurrencyConverterForm/CurrencyConverterForm';

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
        <h2>Конвертер валют</h2>

        <CurrencyConverterForm rates={newRates} />
      </section>
    </main>
  );
};
