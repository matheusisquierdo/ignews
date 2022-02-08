import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'Matheus 123' },
    { id: 2, name: 'Emanoella' },
    { id: 3, name: 'Francesca' },
  ];

  return response.json(users);
};
