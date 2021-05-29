import { useForm } from "react-hook-form";
import { post, Submit, Text_area, Text_input } from "../Common/Common";

const AddAmbulance = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    post("/api/medicine", data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text_input
        register={register}
        name="medicineEquipmentName"
        args={{ required: true }}
      />
      <Text_area register={register} name="notes" />

      <Submit />
    </form>
  );
};

export default AddAmbulance;
