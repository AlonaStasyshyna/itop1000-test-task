export const Header = ({ rates }) => {
  return (
    <header>
      <h1>Exchange Rates</h1>
      <p>{rates[0].exchangedate}</p>

      <ul>
        {rates.map(({ r030: id, rate, cc: currency }) => (
          <li key={id}>
            <p>
              {currency}
              <span>UAH</span>
            </p>
            <p>{rate}</p>
          </li>
        ))}
      </ul>
    </header>
  );
};
