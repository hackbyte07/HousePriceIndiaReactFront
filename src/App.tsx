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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: parseFloat(value) || 0, // Use parseFloat to handle float values
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form values:", formValues);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">FindYourHome</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(formValues).map((key) => (
            <div key={key} className="mb-4 w-full">
              <label
                className="block text-gray-700 text-lg font-medium mb-2 text-center"
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
                className="input input-bordered border-primary w-full text-lg bg-white"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full text-lg py-2 mt-4"
        >
          Find
        </button>
        <div className="mt-6 w-full">
          <label className="block text-gray-700 text-lg font-medium mb-2 text-center">
            Price:
          </label>
          <input
            type="text" // Use text to support float values
            className="input input-bordered border-primary w-full text-lg bg-white"
            value="0"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default App;
