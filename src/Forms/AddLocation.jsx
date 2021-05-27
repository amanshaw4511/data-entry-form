import {useForm} from 'react-hook-form';
import {post} from '../Common/Common';
import useTiming from '../Common/UseTimingHook';

const AddLocation = ({cities}) => {
    const {inputTiming, getTiming} = useTiming();
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        data = {
            ...data,
            cityId: parseInt(data.cityId),
            locationTypeId: parseInt(data.locationTypeId)
        };
        data = getTiming(data);
        post('/api/master/location', data, reset);
    };

    const locationTypes = [
        {id: 1, name: "Hostpital Location"},
        { id: 2, name: "MedicalShop Location" },
    ]

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

            <label> location Type </label>
            <select {...register('locationTypeId')}>
                {locationTypes.map(location => 
                    <option key={location.id} value={location.id}>{location.name}</option>
                )}
            </select>
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
            
            {inputTiming("", register)}

            <label> notes </label>
            <input {...register('notes', {required: true})}/>
            <br />

            <label> phones </label>
            <input type="phone" {...register('phones', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddLocation;
