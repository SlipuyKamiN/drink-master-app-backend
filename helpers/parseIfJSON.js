const parseIfJSON = (string) => {
  try {
    const parsed = typeof string === "string" ? JSON.parse(string) : string;
    // console.log(parsed);
    return parsed;
  } catch (error) {
    // console.log(string);
    return string;
  }
};

export default parseIfJSON;
