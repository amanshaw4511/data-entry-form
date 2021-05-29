import {useForm} from 'react-hook-form';
import {post,Text_area, Select_city,Phone_input, Text_input, Submit} from '../Common/Common';
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
          <Select_city register={register} cities={cities} />

        <Text_input
            register={register}
            name="helplineName"
            args={{required:true}}
        />
        <Text_input
            register={register}
            name="link"
            args={{required:true}}
        />

        <Phone_input 
         register={register}
         name="phone"
        />

        <Text_area
            register={register}
            name="notes"
            args={{required:true}}
        />

            {inputTiming("", register)}

        <Submit />
        </form>
    )
}

export default AddHelpline;
