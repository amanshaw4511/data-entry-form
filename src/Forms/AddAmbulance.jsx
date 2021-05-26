import {useForm} from 'react-hook-form';

const AddAmbulance = ({cities}) => {
   const {register, handleSubmit} = useForm(); 
    const onSubmit = (data) => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> city </label>
            <select {...register('cityId')} >
                {cities.map(city => <option key={city.id} value={city.id}> {city.cityName} </option>)}
            </select>
            <br />

            <label> ambulanceName </label>
            <input {...register('ambulanceName', {required: true})}/>
            <br />

            <label> isAirConditioned </label>
            <input type="checkbox" {...register('isAirConditioned')}/>
            <br />
            
            <label> oxygenAvailable </label>
            <input type="checkbox" {...register('oxygenAvailable')}/>
            <br />
            
            <label> providesOutstationService </label>
            <input type="checkbox" {...register('providesOutstationService')}/>
            <br />
            
            <label> acceptsCovidPatient </label>
            <input type="checkbox" {...register('acceptsCovidPatient')}/>
            <br />
            

            <label> charges </label>
            <input type="number" {...register('charges', {required: true})}/>
            <br />

            <label> isVerified </label>
            <input type="checkbox" {...register('isVerified')}/>
            <br />
            
            <label> timing </label>
            <input {...register('timing', {required: true})}/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <label> phone </label>
            <input type="phone" {...register('phone', {required: true})}/>
            <br />

            <label> votes </label>
            <input type="number" {...register('votes')}  disabled/>
            <br />
            

            <input type="submit" />
        </form>
    )
}

export default AddAmbulance;
