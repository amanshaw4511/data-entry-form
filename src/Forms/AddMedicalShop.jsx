import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { post } from "../Common/Common";

const AddMedicalShop = ({ cities }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      data = {
          ...data,
          cityId: parseInt(data.cityId),
          locationId: parseInt(data.locationId),
          stock: parseInt(data.stock),
      }
    post("/api/medicines/medicalshops", data, reset);
  };

  const [locations, setLocations] = useState([]);
  const getLocations = (cityId) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          "/api/master/location?locationTypeId=2&cityId=" +
          cityId
      )
      .then((response) => {
        setLocations(response.data.payload);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> city </label>
      <select
        {...register("cityId")}
        onChange={(event) => getLocations(event.target.value)}
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {" "}
            {city.cityName}{" "}
          </option>
        ))}
      </select>
      <br />

      <label> location </label>
      <select {...register("locationId")}>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {" "}
            {location.locationName}{" "}
          </option>
        ))}
      </select>
      <br />

      <label> price </label>
      <input type="number" {...register("price", { required: true })} />
      <br />

      <label> stock </label>
      <input type="number" {...register("stock")} />
      <br />

      <label> timing </label>
      <input {...register("timing")} />
      <br />

      <label> isVerified </label>
      <input type="checkbox" {...register("isVerified")} />
      <br />

      <label> isDeliverable </label>
      <input type="checkbox" {...register("isDeliverable")} />
      <br />

      <label> notes </label>
      <input {...register("notes", { required: true })} />
      <br />

      <label> phone </label>
      <input type="phone" {...register("phone", { required: true })} />
      <br />

      <label> votes </label>
      <input type="number" {...register("votes")} disabled />
      <br />

      <input type="submit" />
    </form>
  );
};

export default AddMedicalShop;
