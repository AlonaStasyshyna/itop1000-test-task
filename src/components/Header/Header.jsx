import { Date, Item, List, Text, Title } from './Header.styled';

export const Header = ({ rates }) => {
  return (
    <header>
        <Title>Курси валют</Title>
        <Date>{rates[0].exchangedate}</Date>

      <List>
        {rates.map(({ r030: id, rate, cc: currency }) => (
          <Item key={id}>
            <Text>
              {currency}
              <span>UAH</span>
            </Text>
            <Text>{rate.toFixed(2)}</Text>
          </Item>
        ))}
      </List>
    </header>
  );
};
