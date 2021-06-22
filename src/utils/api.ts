export const getList = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/pads`)
  const data = await response.json();
  return data;
}
