const formatCodeOrder = (id) => {
  if (id) {
    let code = id
      .substr(id.length - 6)
      .slice(0, 5)
      .toUpperCase();
    let stringCode = `CT${code}`;
    return stringCode;
  }
};
module.exports = formatCodeOrder;
