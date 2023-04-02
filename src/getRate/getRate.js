import axios from 'axios';

export const getRate = async () => {
  const { data } = await axios(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
  );

  return data;
};
