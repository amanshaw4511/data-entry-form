import {useForm} from 'react-hook-form';
import {post} from '../Common/Common';

const AddAmbulance = () => {
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        post('/api/medicine', data, reset);
    }

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
