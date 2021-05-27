import {useForm} from 'react-hook-form';
import {post} from '../Common/Common';

const AddCity = () => {
    const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        post('/api/master/city',data, reset);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> cityname </label>
            <input {...register('cityName', {required: true})}/>
            <br />
            

            <label> state </label>
            <input {...register('state', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddCity;

