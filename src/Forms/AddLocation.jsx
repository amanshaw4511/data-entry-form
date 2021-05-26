import {useForm} from 'react-hook-form';

const AddLocation = ({cities}) => {
   const {register, handleSubmit} = useForm(); 
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> city </label>
            <select {...register('cityId')} >
                {cities.map(city => <option key={city.id} value={city.id}> {city.cityName} </option>)}
            </select>
            <br />

            <label> locationName </label>
            <input {...register('locationName', {required: true})}/>
            <br />

            <label> address </label>
            <input {...register('address')}/>
            <br />
            
            <label> isPrivate </label>
            <input type="checkbox" {...register('icuWithVentilator')}/>
            <br />
            
            <label> longitude </label>
            <input type="number" {...register('longitude')}/>
            <br />

            <label> latitude </label>
            <input type="number" {...register('latitude')}/>
            <br />
            
            <label> timing </label>
            <input {...register('timing')}/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <label> phones </label>
            <input type="phone" {...register('phones', {required: true})}/>
            <br />

            <label> votes </label>
            <input type="number" {...register('votes')}  disabled/>
            <br />
            

            <input type="submit" />
        </form>
    )
}

export default AddLocation;
