import {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {post} from '../Common/Common';

const AddHospitalBeds = ({cities}) => {
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        data = {
            ...data,
            cityId: parseInt(data.cityId),
            locationId: parseInt(data.locationId),
        }
        post('/api/hospitalbeds', data, reset);
    }

    const [locations, setLocations] = useState([]);
    const getLocations = (cityId) => {
        axios.get(process.env.REACT_APP_BASE_URL +'/api/master/location?locationTypeId=1&cityId=' + cityId)
            .then((response => {
                setLocations(response.data.payload);
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

            <label> withOxygen </label>
            <input {...register('withOxygen', {required: true})}/>
            <br />

            <label> icuWithoutVentilator </label>
            <input {...register('icuWithoutVentilator')}/>
            <br />
            
            <label> icuWithVentilator </label>
            <input {...register('icuWithVentilator')}/>
            <br />
            
            <label> charges </label>
            <input type="number" {...register('charges')}/>
            <br />
            
            <label> bookingLink </label>
            <input {...register('bookingLink')}/>
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

            <label> votes </label>
            <input type="number" {...register('votes')}  disabled/>
            <br />
            

            <input type="submit" />
        </form>
    )
}

export default AddHospitalBeds;
