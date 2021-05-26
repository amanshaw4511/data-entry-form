import {useForm} from 'react-hook-form';
import {useState, useEffect} from 'react';
import axios from 'axios';

import AddAmbulance from './AddAmbulance';
import AddDoctor from './AddDoctor';
import AddHospitalBeds from './AddHospitalBeds';

import AddCity from './AddCity';
import AddLocation from './AddLocation';
import AddHelpline from './AddHelpline';

import AddMedicine from './AddMedicine';
import AddMedicalShop from './AddMedicalShop';
import AddOxygen from './AddOxygen';
import AddVaccinationCentre from './AddVaccinationCentre';

const SelectForm = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/master/city')
            .then((response => {
                setCities(response.data.payload)
            }));
    }, [])

    const forms = {
        "add city": <AddCity  />,
        "add location": <AddLocation cities={cities}/>,
        "add helpline": <AddHelpline cities={cities}/>,

        "add ambulance": <AddAmbulance cities={cities} />,
        "add doctor": <AddDoctor cities={cities} />,
        "add hospital beds": <AddHospitalBeds cities={cities} />,
        "add medicines": <AddMedicine />,
        "add medical shop" : <AddMedicalShop cities={cities}/>,
        "add oxygen": <AddOxygen cities={cities} />,
        "add vaccination centre": <AddVaccinationCentre cities={cities} />
    }

   const {register, handleSubmit} = useForm(); 
    const [displayForm, setDisplayForm] = useState("");
    const onSubmit = (data) => { setDisplayForm(forms[data.form]) }

    return (
        <div className="container" >
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> Form </label>
            <select {...register('form')} >
                {Object.keys(forms).map(form => <option key={form} value={form}> {form} </option>)}
            </select>
            <br />

            <input type="submit" value="Open"/>
        </form> 
        <br />
        {displayForm}
    </div>
    )
}


export default SelectForm;
