import {useForm} from 'react-hook-form';

const AddAmbulance = () => {
   const {register, handleSubmit} = useForm(); 
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> medicineEquipmentName </label>
            <input {...register('medicineEquipmentName', {required: true})}/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddAmbulance;
