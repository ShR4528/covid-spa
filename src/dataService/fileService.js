export async function readCovidData() {
  return await fetch(
    "https://gammatest.net/course/javascript/react2/owid-covid-data.php"
  ).then((res) => res.json());
}
