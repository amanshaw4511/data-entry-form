import { useForm } from "react-hook-form";
import {
  post,
  Text_area,
  Select_city,
  Phone_input,
  Text_input,
  Submit,
} from "../Common/Common";

const AddHelpline = ({ cities }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = { ...data, cityId: parseInt(data.cityId) };
    post("/api/master/helplines", data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select_city register={register} cities={cities} />
      <Text_input
        register={register}
        name="helplineName"
        args={{ required: true }}
      />
      <Text_input register={register} name="link" />
      <Phone_input register={register} name="phone"
      err={[errors]}
      args={{ required: true }} />
      <Text_area
        register={register}
        name="notes"
      />
      <Text_input register={register} name="timing" />
      <Submit />
    </form>
  );
};

export default AddHelpline;
