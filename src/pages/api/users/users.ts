import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Matheus' },
    { id: 2, name: 'Emanoella' },
    { id: 3, name: 'Francesca' },
  ];

  return response.json(users);
};
