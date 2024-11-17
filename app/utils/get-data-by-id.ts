import allData from '~/data.json'

interface Data {
  title: string
  description: string
}

export function getDataById(id: string): Data {
  return allData[id]
}
