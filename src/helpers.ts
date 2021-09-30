import { differenceInSeconds } from 'date-fns'

export const getSeconds = (date1: string) => {
  return differenceInSeconds(new Date(), new Date(date1))
}
