import {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {post, Submit,Check_box, Text_area, Text_input, Phone_input, Select_city, Select_locations} from '../Common/Common';
import useTiming from '../Common/UseTimingHook';

const AddVaccinationCentre = ({cities}) => {
    const {inputTiming, getTiming} = useTiming();
   const {register, handleSubmit, reset} = useForm(); 
    const onSubmit = (data) => {
        data = {
            ...data,
            cityId: data.cityId,
            locationId: data.locationId,
        }
        data = getTiming(data);
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
            
            <Select_city register={register}
            cities={cities}
            getLocations={getLocations}
        />
        <Select_locations register={register} locations={locations} />

        <Text_input
        register={register}
        name="price"
        type="number" />

        <Text_input
        register={register}
        name="ageGroup"
     />

        <Text_input
        register={register}
        name="date"
        type="date" />

        {inputTiming({},register)}

        <Check_box
        register={register}
        name="isAvailable"
        />
        <Check_box
        register={register}
        name="isVerified"
        />

        <Text_area register={register} name="notes" />
        <Phone_input register={register} name="phone" />
        <Submit />

        </form>
    )
}

export default AddVaccinationCentre;
