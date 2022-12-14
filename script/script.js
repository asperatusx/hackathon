axios
  .get("https://api.openbrewerydb.org/breweries")
  .then((result) => {
    console.log(result);
    getData(result);
  })
  .catch((error) => {
    console.log(error);
  });

const getData = (result) => {
  const name = result.data[i].name;
  const city = result.data[i].city;
  const state = result.data[i].state;
};
