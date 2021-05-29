import { useForm } from "react-hook-form";
import {
  post,
  Text_input,
  Phone_input,
  Text_area,
  Check_box,
  Submit,
  Select_city,
  Select_location,
} from "../Common/Common";
import useTiming from "../Common/UseTimingHook";

const AddLocation = ({ cities }) => {
  const { inputTiming, getTiming } = useTiming();
  const { register, handleSubmit, reset } = useForm();
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
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select_city register={register} cities={cities} />

      <Text_input
        register={register}
        name="locationName"
        args={{ required: true }}
      />

      <Select_location register={register} locationTypes={locationTypes} />

      <Text_area
        register={register}
        name="locationName"
        args={{ required: true }}
      />

      <Check_box register={register} name="isPrivate" />

      <Check_box register={register} name="icuWithVentilator" />

      <Text_input
      register={register}
      name="longitude"
      />

      <Text_input
      register={register}
      name="latitude"
      />


      {inputTiming("", register)}

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone" args={{ required: true }} />

      <Submit />
    </form>
  );
};

export default AddLocation;
