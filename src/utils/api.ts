import {Padd, IPadd} from '../models/Padd';
export const getList = async (pageNumber: Number=1): Promise<Padd[]> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/padds?page=${pageNumber}`)
  const data: []  = await response.json();
  return data.map((paddItem: IPadd) => new Padd(paddItem.id, paddItem.title, paddItem.description));
}
