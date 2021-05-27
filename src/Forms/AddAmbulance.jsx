import { useForm } from "react-hook-form";
import useTiming from "../Common/UseTimingHook";
import { post } from "../Common/Common";

const AddAmbulance = ({ cities }) => {
  const { inputTiming, getTiming } = useTiming();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    data = { ...data, cityId: parseInt(data.cityId) };
    data = getTiming(data);

    post("/api/ambulance", data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> city </label>
      <select {...register("cityId")}>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {" "}
            {city.cityName}{" "}
          </option>
        ))}
      </select>
      <br />

      <label> ambulanceName </label>
      <input {...register("ambulanceName", { required: true })} />
      <br />

      <label> isAirConditioned </label>
      <input type="checkbox" {...register("isAirConditioned")} />
      <br />

      <label> oxygenAvailable </label>
      <input type="checkbox" {...register("oxygenAvailable")} />
      <br />

      <label> providesOutstationService </label>
      <input type="checkbox" {...register("providesOutstationService")} />
      <br />

      <label> acceptsCovidPatient </label>
      <input type="checkbox" {...register("acceptsCovidPatient")} />
      <br />

      <label> charges </label>
      <input type="number" {...register("charges", { required: true })} />
      <br />

      <label> isVerified </label>
      <input type="checkbox" {...register("isVerified")} />
      <br />

      {inputTiming("", register)}

      <label> notes </label>
      <input {...register("notes", { required: true })} />
      <br />

      <label> phone </label>
      <input type="phone" {...register("phone", { required: true })} />
      <br />

      <input type="submit" />
    </form>
  );
};

export default AddAmbulance;
