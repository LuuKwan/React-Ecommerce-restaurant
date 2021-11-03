export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};
export const getUniqueValues = (data, strType) => {
  //ES^ feature, return value of property which match strType
  let unique = data.map((item) => item[strType]);
  return ["all", ...new Set(unique)];
};
