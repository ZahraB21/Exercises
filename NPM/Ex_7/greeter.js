const greet = (firstName, lastName, func) => {
  console.log(`Hi ${firstName} ${lastName}`);
  func();
};

module.exports = 
  greet
;
