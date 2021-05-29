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

const AddHospitalBeds = ({ cities }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      cityId: parseInt(data.cityId),
      locationId: parseInt(data.locationId),
    };
    post("/api/hospitalbeds", data, reset);
  };

  const [locations, setLocations] = useState([]);
  const getLocations = (cityId) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          "/api/master/location?locationTypeId=1&cityId=" +
          cityId
      )
      .then((response) => {
        console.log(response.data);
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
        name="withOxygen"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="withoutOxygen"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="icuWithVentilator"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="icuWithoutVentilator"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="charges"
        type="number"
        args={{ required: true }}
      />
      <Text_input
        register={register}
        name="bookingLink"
        args={{ required: true }}
      />
      <Check_box register={register} name="isVerified" />

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone" />
      <Submit />
    </form>
  );
};

export default AddHospitalBeds;
