export const API_INITS = ({ body, headers, method, ...props }) => {
  console.log(body);
  return {
    body: JSON.stringify(body) || null,
    headers: headers || { 'Content-Type': 'application/json' },
    method: method || 'POST',
    credentials: 'include',
    ...props,
  };
};
