axios
  .get("https://api.openbrewerydb.org/breweries")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
