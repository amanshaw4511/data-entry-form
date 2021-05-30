import { useForm } from "react-hook-form";
import {
  post,
  Text_area,
  Text_input,
  Submit,
  Phone_input,
  Select_city,
  Check_box,
} from "../Common/Common";

const AddDoctor = ({ cities }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data = { ...data, cityId: parseInt(data.cityId) };
    post("/api/doctors", data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select_city register={register} cities={cities} />
      <Text_input
        register={register}
        name="doctorName"
        args={{ required: true }}
      />
      <Text_input register={register} name="designation" />
      <Text_input register={register} name="experience" />
      <Text_input register={register} name="qualification" />
      <Text_input register={register} name="medium" />
      <Text_input register={register} name="mediumLink" />
      <Text_input
        register={register}
        name="fees"
        type="number"
        args={{ required: true }}
      />
      <Text_area register={register} name="notes" />
      <Phone_input register={register} name="phone" err={[errors]} />
      <Text_area register={register} name="address" />
      <Check_box register={register} name="isVerified" />
      <Submit />
    </form>
  );
};

export default AddDoctor;
