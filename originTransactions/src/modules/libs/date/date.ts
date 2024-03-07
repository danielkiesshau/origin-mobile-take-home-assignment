import {format} from 'date-fns';

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return format(dateObj, 'MM/dd/yy HH:mm:ss');
};
