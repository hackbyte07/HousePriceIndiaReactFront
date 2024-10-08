import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

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
      [name]: parseFloat(value) || 0,
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
    <body className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          FindYourHome <label className="text-orange-500">India</label>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="bedrooms"
            >
              Bedrooms
            </label>
            <input
              type="numeric"
              name="bedrooms"
              id="bedrooms"
              value={formValues.bedrooms}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="bathrooms"
            >
              Bathrooms
            </label>
            <input
              type="numeric"
              name="bathrooms"
              id="bathrooms"
              value={formValues.bathrooms}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="livingArea"
            >
              Living Area (sq ft)
            </label>
            <input
              type="number"
              name="livingArea"
              id="livingArea"
              step="any"
              value={formValues.livingArea}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="lotArea"
            >
              Lot Area (sq ft)
            </label>
            <input
              type="number"
              name="lotArea"
              id="lotArea"
              step="any"
              value={formValues.lotArea}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="floors"
            >
              Floors
            </label>
            <input
              type="numeric"
              name="floors"
              id="floors"
              value={formValues.floors}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="waterfront"
            >
              Waterfront
            </label>
            <input
              type="numeric"
              name="waterfront"
              id="waterfront"
              value={formValues.waterfront}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="views"
            >
              Views
            </label>
            <input
              type="numeric"
              name="views"
              id="views"
              value={formValues.views}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="condition"
            >
              Condition
            </label>
            <input
              type="numeric"
              name="condition"
              id="condition"
              value={formValues.condition}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="grade"
            >
              Grade
            </label>
            <input
              type="numeric"
              name="grade"
              id="grade"
              value={formValues.grade}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="houseArea"
            >
              House Area (sq ft)
            </label>
            <input
              type="number"
              name="houseArea"
              id="houseArea"
              step="any"
              value={formValues.houseArea}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="basementArea"
            >
              Area of the Basement (sq ft)
            </label>
            <input
              type="number"
              name="basementArea"
              id="basementArea"
              step="any"
              value={formValues.basementArea}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="livingAreaRenov"
            >
              Living Area Renovated (sq ft)
            </label>
            <input
              type="number"
              name="livingAreaRenov"
              id="livingAreaRenov"
              step="any"
              value={formValues.livingAreaRenov}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="lotAreaRenov"
            >
              Lot Area Renovated (sq ft)
            </label>
            <input
              type="number"
              name="lotAreaRenov"
              id="lotAreaRenov"
              step="any"
              value={formValues.lotAreaRenov}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="builtYear"
            >
              Built Year
            </label>
            <input
              type="numeric"
              name="builtYear"
              id="builtYear"
              value={formValues.builtYear}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="renovationYear"
            >
              Renovation Year
            </label>
            <input
              type="numeric"
              name="renovationYear"
              id="renovationYear"
              value={formValues.renovationYear}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              type="numeric"
              name="postalCode"
              id="postalCode"
              value={formValues.postalCode}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="latitude"
            >
              Latitude (degrees)
            </label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              step="any"
              value={formValues.latitude}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="longitude"
            >
              Longitude (degrees)
            </label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              step="any"
              value={formValues.longitude}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="schoolsNearby"
            >
              Number of Schools Nearby
            </label>
            <input
              type="numeric"
              name="schoolsNearby"
              id="schoolsNearby"
              value={formValues.schoolsNearby}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-black text-lg font-medium mb-2 text-center"
              htmlFor="airportDistance"
            >
              Distance from Airport (km)
            </label>
            <input
              type="numeric"
              name="airportDistance"
              id="airportDistance"
              step="any"
              value={formValues.airportDistance}
              onChange={handleChange}
              className="input text-black input-bordered border-primary w-full text-lg bg-white"
            />
          </div>
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
              type="text"
              className="input text-green-700 font-bold w-full text-lg bg-white"
              value={"Rs. " + price}
              readOnly
            />
          </div>
        )}
      </div>
    </body>
  );
};

export default App;
