export const calculate = (expression: string): string => {
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expression);
  if (!matched) return "0";
  if (/^[*+\/]/.test(expression)) {
    let createError = new Error(
      "Cannot start the expression with invalid operators"
    );
    createError.name = "CUSTOM_ERROR";
    throw createError;
    // return () => {
    //   throw new Error('Cannot start the expression with invalid operators')
    // }
  }
  return eval(matched[0]);
};
