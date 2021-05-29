import { useForm } from "react-hook-form";
import useTiming from "../Common/UseTimingHook";
import {
  post,
  Text_area,
  Text_input,
  Check_box,
  Submit,
  Phone_input,
  Select_city,
} from "../Common/Common";

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
      <Select_city register={register} cities={cities} />

      <Text_input
        register={register}
        name="ambulanceName"
        args={{ required: true }}
      />

      <Check_box register={register} name="isAirConditioned" />
      <Check_box register={register} name="oxygenAvailable" />
      <Check_box register={register} name="providesOutstationService" />
      <Check_box register={register} name="acceptsCovidPatient" />

      <Check_box register={register} name="isVerified" />

      <Text_input
        register={register}
        name="charges"
        args={{ required: true }}
      />

      {inputTiming("", register)}

      <Text_area register={register} name="notes" />

      <Phone_input register={register} name="phone" />

      <Submit />
    </form>
  );
};

export default AddAmbulance;
