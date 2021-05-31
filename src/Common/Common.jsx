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
  reset({});
};

const Text_input = ({ register, name, type="text", args = {} , err}) => (
  <div className="form-group ">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0][name] && err[1] : "" }
        </small>
  </div>
);


const Phone_input = ({ register, name, args = {}, err }) => { 
    args['pattern'] = /^[\d,\-\+]*$/g;

    return (
  <div className="form-group">
      <div className="row" >
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0][name] && "can only contains [- + , digits]": "" }
        </small>
  </div>
);};

const Text_area = ({ register, name, args = {} , err}) => (
  <div className="form-group ">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0][name] && err[1] : "" }
        </small>
  </div>
);

const Check_box = ({ register, name, args = {}, err }) => (
  <div className="form-group ml-4">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0][name] && err[1] : "" }
        </small>
  </div>
);

const Select_city = ({ register, cities, getLocations = (_e) => true, err }) => (
  <div className="form-group">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0]['cityId'] && err[1] : "" }
        </small>
  </div>
);
const Select_locations = ({ register, locations, err }) => (
  <div className="form-group">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0]['locationId'] && err[1] : "" }
        </small>
  </div>
);

const Select_location_type = ({ register, locationTypes, err }) => (
  <div className="form-group">
      <div className="row">
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
        <small className="form-text text-right text-danger">
            {err != undefined ? err[0]['locationTypeId'] && err[1] : "" }
        </small>
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
  Select_location_type,
  Select_locations,
  Submit,
};
