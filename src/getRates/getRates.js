import axios from 'axios';

export const getRates = async () => {
  const { data } = await axios(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json'
  );

  return data.filter(({ cc }) => cc === 'USD' || cc === 'EUR');
};
