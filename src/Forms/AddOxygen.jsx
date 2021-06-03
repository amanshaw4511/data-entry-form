import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { post,
  Text_area,
  Text_input,
  Submit,
  Select_city,
  Select_locations,
  Phone_input,
  Check_box,
} from "../Common/Common";

import useTiming from "../Common/UseTimingHook";

const AddOxygen = ({ cities }) => {
  const { inputTiming, getTiming } = useTiming();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      cityId: parseInt(data.cityId),
      locationId: parseInt(data.locationId),
      stock: data.stock,
    };
    data = getTiming(data);
    post("/api/oxygen", data, reset);
  };

  const [locations, setLocations] = useState([]);
  const getLocations = (cityId) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          "/api/master/location?locationTypeId=9&cityId=" +
          cityId
      )
      .then((response) => {
        setLocations(response.data.payload);
      });
  };


  // const locationTypes = [
  //   { id: 1, name: "Hostpital Location" },
  //   { id: 2, name: "MedicalShop Location" },
  //   { id: 9, name: "Oxygen Location" },
  // ];

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

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone" err={[errors]}/>

      <Submit />
    </form>
  );
};

export default AddOxygen;
