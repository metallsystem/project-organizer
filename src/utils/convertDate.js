const convertDate = (date) => {
  let convertedDate = date.slice(0, 10).split('-').reverse().join('.')

  return convertedDate
};

export default convertDate;
