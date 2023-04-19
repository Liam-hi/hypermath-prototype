interface NumericChecker {
    (value: string): boolean;
  }
  
  export const isNumeric: NumericChecker = (value) => {
    return /^-?\d+$/.test(value);
  }
  