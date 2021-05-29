import axios from "axios";

const post = (path, data, reset) => {
  console.log(JSON.stringify(data));
  axios.post(
    process.env.REACT_APP_BASE_URL + path,

    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // reset({});
};

const Text_input = ({ register, name, type="text", args = {} }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor={name}>
      {" "}
      {name.replace(/([a-z])([A-Z])/g, `$1 $2`)}{" "}
    </label>
    <input
      type={type}
      className="form-control col mr-3"
      id={name}
      {...register(name, args)}
    />
  </div>
);


const Phone_input = ({ register, name, args = {} }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor={name}>
      {" "}
      {name.replace(/([a-z])([A-Z])/g, `$1 $2`)}{" "}
    </label>
    <input
      className="form-control col mr-3"
      id={name}
      {...register(name, args)}
    />
  </div>
);

const Text_area = ({ register, name, args = {} }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor={name}>
      {" "}
      {name.replace(/([a-z])([A-Z])/g, `$1 $2`)}{" "}
    </label>
    <textarea
      className="form-control col mr-3"
      id={name}
      rows="3"
      {...register(name, args)}
    ></textarea>
  </div>
);

const Check_box = ({ register, name, args = {} }) => (
  <div className="form-group row ml-4">
    <label className="" htmlFor={name}>
      {" "}
      {name.replace(/([a-z])([A-Z])/g, `$1 $2`)}{" "}
    </label>
    <input
      type="checkbox"
      className="form-check-input "
      id={name}
      {...register(name, args)}
    />
  </div>
);

const Select_city = ({ register, cities, getLocations = (_e) => true }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor="city">
      city
    </label>
    <select
      className="form-control col mr-3"
      id="city"
      {...register("cityId", { required: true })}
      onChange={(event) => getLocations(event.target.value)}
    >
      <option value="">Select...</option>

      {cities.map((city) => (
        <option key={city.id} value={city.id}>
          {" "}
          {city.cityName}{" "}
        </option>
      ))}
    </select>
  </div>
);
const Select_locations = ({ register, locations }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor="location">
      {" "}
      Location{" "}
    </label>
    <select
      className="form-control col mr-3"
      id="location"
      {...register("locationId", { required: true })}
    >
      <option value="">Select...</option>
      {locations.map((location) => (
        <option key={location.id} value={location.id}>
          {" "}
          {location.locationName}{" "}
        </option>
      ))}
    </select>
  </div>
);

const Select_location = ({ register, locationTypes }) => (
  <div className="form-group row">
    <label className="col-4" htmlFor="location">
      {" "}
      location Type{" "}
    </label>
    <select
      className="form-control col mr-3"
      id="location"
      {...register("locationTypeId", { required: true })}
    >
      <option value="">Select...</option>
      {locationTypes.map((location) => (
        <option key={location.id} value={location.id}>
          {location.name}
        </option>
      ))}
    </select>
  </div>
);

const Submit = () => <input className="btn btn-primary" type="submit" />;

export {
  post,
  Text_input,
  Text_area,
  Phone_input,
  Check_box,
  Select_city,
  Select_location,
  Select_locations,
  Submit,
};
