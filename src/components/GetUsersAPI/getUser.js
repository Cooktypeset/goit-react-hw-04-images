const API_KEY = '37979441-f1d7e4c3b344b48b7a2dc7a50';

export default async function getInfoFromApi(value, page) {
  const URL = `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}