import { useForm } from "react-hook-form";
import {
  post,
  Text_input,
  Phone_input,
  Text_area,
  Check_box,
  Submit,
  Select_city,
  Select_location_type,
} from "../Common/Common";
import useTiming from "../Common/UseTimingHook";

const AddLocation = ({ cities }) => {
  const { inputTiming, getTiming } = useTiming();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      cityId: parseInt(data.cityId),
      locationTypeId: parseInt(data.locationTypeId),
    };
    data = getTiming(data);
    post("/api/master/location", data, reset);
  };

  const locationTypes = [
    { id: 1, name: "Hostpital Location" },
    { id: 2, name: "MedicalShop Location" },
    { id: 9, name: "Oxygen Location" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select_city register={register} cities={cities} />

      <Text_input
        register={register}
        name="locationName"
        args={{ required: true }}
      />

      <Select_location_type register={register} locationTypes={locationTypes} />

      <Check_box register={register} name="isPrivate" />


      <Text_input
      register={register}
      name="longitude"
      args={{ pattern: /^[-+]?\d{1,2}(.\d+)?$/g }}
      /> 

      <Text_input
      register={register}
      name="latitude"
      args={{ pattern: /^[-+]?\d{1,2}(.\d+)?$/g }}
      />


      {inputTiming("", register)}

      <Text_area register={register} name="address" />

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone"
      err={[errors]}
      />

      <Submit />
    </form>
  );
};

export default AddLocation;
