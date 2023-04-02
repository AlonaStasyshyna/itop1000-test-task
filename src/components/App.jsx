import { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper/Wrapper';
import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';
import { Header } from './Header/Header';
import { getRates } from 'getRates/getRates';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const App = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getRates().then(setRates).catch(setError).finally(setIsLoading(false));
  }, []);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {!isLoading && rates.length > 0 && (
        <>
          <Header rates={rates} />
          <CurrencyConverter rates={rates} />
        </>
      )}
      {error && <ErrorMessage />}
    </Wrapper>
  );
};
