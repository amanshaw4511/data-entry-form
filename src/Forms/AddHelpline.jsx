import {useForm} from 'react-hook-form';

const AddHelpline = ({cities}) => {
   const {register, handleSubmit} = useForm(); 
    const onSubmit = (data) => console.log(data);

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

            <label> timing </label>
            <input {...register('timing', {required: true})}/>
            <br />

            <label> votes </label>
            <input type="number" {...register('votes')}  disabled/>
            <br />
            

            <input type="submit" />
        </form>
    )
}

export default AddHelpline;
