const dataManagment = (callback) => {
  const data = {
    name: "pepito",
    age: 25,
  };

  return callback(data);
};

dataManagment((data) => console.log("data"));
