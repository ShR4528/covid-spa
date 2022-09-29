import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { readCovidData } from "../dataService/fileService";
import RouteComponent from "./RouteComponent";
import { useDispatch } from "react-redux";
import { setCountryId } from "../ReduxState";

function BodyComponent(props) {
  const [covidData, setCovidData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [countryData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    readCovidData().then((data) => {
      setCovidData(data);

      const list = [];
      for (const key in data) {
        list.push({ key, name: data[key].location });
        if (data[key].location === props.initialCountry) {
          dispatch(setCountryId(key));
        }
      }
      setCountryList(list);
    });
  }, [dispatch, props.initialCountry]);

  return (
    <Container className="mt-4">
      <RouteComponent
        countryList={countryList}
        countryData={countryData}
        covidData={covidData}
        countryCount={Object.keys(covidData).length}
      />
    </Container>
  );
}

BodyComponent.defaultProps = {
  initialCountry: "Estonia",
};
export default BodyComponent;
