import {Padd, IPadd} from '../models/Padd';

export const getPaddList = async (pageNumber: Number=1): Promise<Padd[]> => {
  const data: IPadd[]  = await new Promise<IPadd[]>(async (resolve, reject) => {
    setTimeout(() => resolve([
      {
        id: 1,
        title: 'Sample Title 1',
        content: 'Sample content of Sample Title 1'
      },{
        id: 2,
        title: 'Sample Title 2',
        content: 'Sample content of Sample Title 2'
      },{
        id: 3,
        title: 'Sample Title 3',
        content: 'Sample content of Sample Title 3'
      },{
        id: 4,
        title: 'Sample Title 4',
        content: 'Sample content of Sample Title 4'
      },{
        id: 5,
        title: 'Sample Title 5',
        content: 'Sample content of Sample Title 5'
      },{
        id: 6,
        title: 'Sample Title 6',
        content: 'Sample content of Sample Title 6'
      },{
        id: 7,
        title: 'Sample Title 7',
        content: 'Sample content of Sample Title 7'
      },{
        id: 8,
        title: 'Sample Title 8',
        content: 'Sample content of Sample Title 8'
      },{
        id: 9,
        title: 'Sample Title 9',
        content: 'Sample content of Sample Title 9'
      },{
        id: 10,
        title: 'Sample Title 10',
        content: 'Sample content of Sample Title 10'
      },{
        id: 11,
        title: 'Sample Title 11',
        content: 'Sample content of Sample Title 11'
      },{
        id: 12,
        title: 'Sample Title 12',
        content: 'Sample content of Sample Title 12'
      },{
        id: 13,
        title: 'Sample Title 13',
        content: 'Sample content of Sample Title 13'
      },{
        id: 14,
        title: 'Sample Title 14',
        content: 'Sample content of Sample Title 14'
      }
    ]), 1500)
  })
  return data.map((paddItem: IPadd) => new Padd(paddItem.id, paddItem.title, paddItem.content));
}
