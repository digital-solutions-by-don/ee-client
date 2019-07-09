export const convertDate = date => {
  let tempDate = new Date(date);
  let year = tempDate.getFullYear();
  let month = prependZero(tempDate.getMonth()+1);
  let day = prependZero(tempDate.getDate());
  return `${year}-${month}-${day}`;
};

const prependZero = value => value < 10 ? `0${value}` : value;