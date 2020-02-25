const greet = (firstName, lastName, func) => {
  console.log(`Hi ${firstName} ${lastName}`);
  func();
};

greet("Zahra", "Behfarshad", () =>
  console.log("This code gets executed after the greet function call")
);
