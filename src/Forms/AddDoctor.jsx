import {useForm} from 'react-hook-form';
import {post} from '../Common/Common';

const AddDoctor = ({cities}) => {
   const {register, handleSubmit, reset} = useForm(); 

    const onSubmit = (data) => {
        data = {...data, cityId: parseInt(data.cityId)}
        post('/api/doctors', data, reset);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> city </label>
            <select {...register('cityId')} >
                {cities.map(city => <option key={city.id} value={city.id}> {city.cityName} </option>)}
            </select>
            <br />

            <label> doctorName </label>
            <input {...register('doctorName', {required: true})}/>
            <br />
            
            <label> designation </label>
            <input {...register('designation', {required: true})}/>
            <br />

            <label> experience </label>
            <input {...register('experience', {required: true})}/>
            <br />

            <label> qualification </label>
            <input {...register('qualification', {required: true})}/>
            <br />

            <label> medium </label>
            <input {...register('medium', {required: true})}/>
            <br />

            <label> mediumLink </label>
            <input {...register('mediumLink', {required: true})}/>
            <br />

            <label> fees </label>
            <input {...register('fees', {required: true})}/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <label> phone </label>
            <input type="phone" {...register('phone', {required: true})}/>
            <br />

            <label> address </label>
            <input {...register('address', {required: true})}/>
            <br />

            <label> isVerified </label>
            <input type="checkbox" {...register('isVerified', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddDoctor;
