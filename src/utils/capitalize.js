// Helper fn that capitalizes first letter of every word in input string.
// Allows users to search for "austin" rather than "Austin".

const capitalize = (str) => {
  let output = "";
  if (str !== "") {
    str.split(" ").forEach((w) => {
      if (w !== "") {
        output += w[0].toUpperCase() + w.slice(1) + " ";
      }
    });
    return output.slice(0, -1);
  }
};

export default capitalize;
