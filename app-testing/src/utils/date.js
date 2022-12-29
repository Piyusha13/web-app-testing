export const formattedDateString = (isoString) => {
    const createDate = new Date(isoString);
    const dateStringArray = createDate?.toString?.()?.substring?.(4, 15)?.split?.(' ');
    return `${dateStringArray[1]} ${dateStringArray[0]} ${dateStringArray[2]}`;
  };
  
  export const formattedDateTimeString = (isoString) => {
    const createDate = new Date(isoString);
    const dateStringArray = createDate?.toString?.()?.substring?.(4, 15)?.split?.(' ');
    return `${dateStringArray[1]} ${dateStringArray[0]} ${dateStringArray[2]} ${createDate.toLocaleTimeString()}`;
  };
  
  export const getEndDateFromDurationType = (durationType, durationValue, startDateIsoString) => {
    const startDate = new Date(startDateIsoString);
    const duration = parseInt(durationValue, 10);
    switch (durationType) {
      case 'Months': {
        let year = startDate.getFullYear()
        let months = startDate.getMonth() + duration;
        if (months > 11) {
          year = year + Math.floor(months / 12);
          months = months % 12;
        }
        const endDate = new Date(year, months, startDate.getDate());
        return endDate;
      }
      case 'Years': {
        const endDate = new Date(startDate.getFullYear() + duration, startDate.getMonth(), startDate.getDate());
        return endDate;
      }
      case 'Days': {
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const endDate = new Date(startDate.getTime() + duration * millisecondsInDay);
        return endDate;
      }
      default: {
        return startDate;
      }
    }
  }