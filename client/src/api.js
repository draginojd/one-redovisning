export const API_URL = process.env.REACT_APP_API_URL;

export async function getRoot() {
  const response = await fetch(API_URL + '/');
  return response.text();
}
