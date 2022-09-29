export async function getTodayCovidData() {
  return await fetch("https://disease.sh/v3/covid-19/all").then((res) =>
    res.json()
  );
}
