import { useForm } from "react-hook-form";
import { post, Text_input,Submit } from "../Common/Common";

const AddCity = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    post("/api/master/city", data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text_input
        register={register}
        name="cityName"
        args={{ required: true }}
      />

      <Text_input
      register={register} 
      name="state" 
      args={{ required: true }} 
      />

      <Submit />
    </form>
  );
};

export default AddCity;
