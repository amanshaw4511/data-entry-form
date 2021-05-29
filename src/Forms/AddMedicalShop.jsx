import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  post,
  Text_area,
  Text_input,
  Submit,
  Phone_input,
  Select_city,
  Select_locations,
  Check_box,
} from "../Common/Common";

import useTiming from "../Common/UseTimingHook";

const AddMedicalShop = ({ cities }) => {
  const { inputTiming, getTiming } = useTiming();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data = getTiming(data);
    data = {
      ...data,
      cityId: parseInt(data.cityId),
      locationId: parseInt(data.locationId),
      stock: parseInt(data.stock),
    };
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
      <Select_city
        register={register}
        cities={cities}
        getLocations={getLocations}
      />
      <Select_locations register={register} locations={locations} />

      <Text_input
        register={register}
        name="price"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="stock"
        type="number"
        args={{ required: true }}
      />

      {inputTiming({}, register)}

      <Check_box register={register} name="isVerified" />
      <Check_box register={register} name="isDeliverable" />

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone" />

      <Submit />
    </form>
  );
};

export default AddMedicalShop;
