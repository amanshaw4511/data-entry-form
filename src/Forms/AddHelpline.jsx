import {useForm} from 'react-hook-form';
import {post} from '../Common/Common';
import useTiming from '../Common/UseTimingHook';

const AddHelpline = ({cities}) => {
    const {inputTiming, getTiming} = useTiming();
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        data = getTiming(data);
        data = {...data, cityId: parseInt(data.cityId)};
        post('/api/master/helplines', data, reset);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> city </label>
            <select {...register('cityId')} >
                {cities.map(city => <option key={city.id} value={city.id}> {city.cityName} </option>)}
            </select>

            <label> helplineName </label>
            <input {...register('helplineName', {required: true})}/>
            <br />

            <label> link</label>
            <input {...register('link')}/>
            <br />

            <label> phone </label>
            <input type="number" {...register('phone')}  disabled/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            {inputTiming("", register)}

            <input type="submit" />
        </form>
    )
}

export default AddHelpline;
