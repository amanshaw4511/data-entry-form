import {useForm} from 'react-hook-form';

const AddCity = () => {
   const {register, handleSubmit} = useForm(); 
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label> cityname </label>
            <input {...register('cityName', {required: true})}/>
            <br />
            

            <label> state </label>
            <input {...register('state', {required: true})}/>
            <br />

            <input type="submit" />
        </form>
    )
}

export default AddCity;

