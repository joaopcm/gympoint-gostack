import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).json({ error: 'Token not provided' });

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer')
    return response.status(401).json({ error: 'Token malformed' });

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    request.userId = decoded.id;
  } catch (error) {
    return response.status(401).json({ error: 'Invalid token' });
  }

  return next();
};
