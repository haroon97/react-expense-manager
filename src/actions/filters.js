// SET TEXT FILTER
export const setTextFilter = (text = '') => {
    return {
      type: 'SET_TEXT_FILTER',
      text
    }
  }
  
  // SORT BY AMOUNT
export const sortByAmount = () => {
    return {
      type: 'SORT_BY_AMOUNT'
    }
  }
  
  // SORT BY DATE
export const sortByDate = () => {
    return {
      type: 'SORT_BY_DATE'
    }
  }
  
  // SET START DATE
export const setStartDate = (date = undefined) => {
    return {
      type: 'SET_START_DATE',
      date
    }
  }
  
  // SET END DATE 
export const setEndDate = (date = undefined) => {
    return {
      type: 'SET_END_DATE',
      date
    }
  }