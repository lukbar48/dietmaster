export const authenticateRequest = (req: any) => {
  const token = localStorage.getItem('__be_token__') || null;
  const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

  return token === userToken;
};