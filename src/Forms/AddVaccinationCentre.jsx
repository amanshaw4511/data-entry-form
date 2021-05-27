import {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {post} from '../Common/Common';

const AddVaccinationCentre = ({cities}) => {
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        data = {
            ...data,
            cityId: data.cityId,
            locationId: data.locationId,
        }
        post('/api/vaccinationcentre', data, reset);
    }

    const [locations, setLocations] = useState([]);
    const getLocations = (cityId) => {
         axios.get(process.env.REACT_APP_BASE_URL + '/api/master/location?locationTypeId=1&cityId=' + cityId)
             .then((response => {
                 setLocations(response.data.payload)
             }));
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> city </label>
            <select {...register('cityId')} onChange={(event) => getLocations(event.target.value)} >
                {cities.map(city => <option key={city.id} value={city.id}> {city.cityName} </option>)}
            </select>
            <br />

            <label> location </label>
            <select {...register('locationId') } >
                {locations.map(location => <option key={location.id} value={location.id}> {location.locationName} </option>)}
            </select>
            <br />

            <label> price </label>
            <input {...register('price', {required: true})}/>
            <br />

            <label> ageGroup </label>
            <input {...register('ageGroup')}/>
            <br />
            
            <label> date </label>
            <input type="date" {...register('date')}/>
            <br />
            
            <label> timing </label>
            <input {...register('timing')}/>
            <br />
            
            <label> isAvailable </label>
            <input type="checkbox" {...register('bookingLink')}/>
            <br />

            <label> isVerified </label>
            <input type="checkbox" {...register('isVerified')}/>
            <br />

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <label> phone </label>
            <input type="phone" {...register('phone', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddVaccinationCentre;
