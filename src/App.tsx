import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
  bedrooms: number;
  bathrooms: number;
  livingArea: number;
  lotArea: number;
  floors: number;
  waterfront: number;
  views: number;
  condition: number;
  grade: number;
  houseArea: number;
  basementArea: number;
  builtYear: number;
  renovationYear: number;
  postalCode: number;
  latitude: number;
  longitude: number;
  livingAreaRenov: number;
  lotAreaRenov: number;
  schoolsNearby: number;
  airportDistance: number;
}

const App: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    bedrooms: 0,
    bathrooms: 0,
    livingArea: 0,
    lotArea: 0,
    floors: 0,
    waterfront: 0,
    views: 0,
    condition: 0,
    grade: 0,
    houseArea: 0,
    basementArea: 0,
    builtYear: 0,
    renovationYear: 0,
    postalCode: 0,
    latitude: 0,
    longitude: 0,
    livingAreaRenov: 0,
    lotAreaRenov: 0,
    schoolsNearby: 0,
    airportDistance: 0,
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: parseFloat(value) || 0, // Use parseFloat to handle float values
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/houseprice/predict", {
        num_of_bedroom: formValues.bedrooms,
        no_of_bathroom: formValues.bathrooms,
        living_area: formValues.livingArea,
        lot_area: formValues.lotArea,
        no_of_floors: formValues.floors,
        waterfront_prsent: formValues.waterfront,
        no_of_views: formValues.views,
        house_condition: formValues.condition,
        house_grade: formValues.grade,
        house_area_exclude_basement: formValues.houseArea,
        area_of_basement: formValues.basementArea,
        built_year: formValues.builtYear,
        renovation_area: formValues.renovationYear,
        postal_code: formValues.postalCode,
        lattitude: formValues.latitude,
        longitude: formValues.longitude,
        living_area_renov: formValues.livingAreaRenov,
        lot_area_renov: formValues.lotAreaRenov,
        num_schools_nearby: formValues.schoolsNearby,
        distance_area_from_airport: formValues.airportDistance,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          setPrice(res.data.predictions[0]);
        }
      })
      .catch((_) => alert("There is some error. Try again"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          FindYourHome
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.keys(formValues).map((key) => (
            <div key={key} className="mb-4 w-full">
              <label
                className="block text-black text-lg font-medium mb-2 text-center"
                htmlFor={key}
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="text" // Use text to support float values
                name={key}
                id={key}
                value={formValues[key as keyof FormValues]}
                onChange={handleChange}
                className="input text-black input-bordered border-primary w-full text-lg bg-white"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit()}
          className="btn btn-primary w-full text-lg py-2 mt-4"
        >
          Find
        </button>

        {price !== 0 && (
          <div className="mt-12 w-full">
            <label className="block text-black text-lg font-medium mb-2 text-center">
              Estimated Price is:
             
            </label>
            <input
              type="text" // Use text to support float values
              className="input text-red-700 font-bold w-full text-lg bg-white"
              value={'Rs. ' + price}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
