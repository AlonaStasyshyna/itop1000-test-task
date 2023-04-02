import { Container } from './Container/Container';
import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <Container>
      <Header />
      <CurrencyConverter />
    </Container>
  );
};
