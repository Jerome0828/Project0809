import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Labels(props) {
    const [font, setFont] = useState([])

    useEffect( () => {
        if ( typeof props.types == 'string') {
            if ( props.types.split(';').length <= 7) {
                setFont(props.types.split(';'))
            }else {
                setFont(props.types.split(';').slice(0, 7))
            }
        }
    }, [props])


    return font.map( (value) => {
        return (
            <div className='mt-2 animate__animated animate__flipInX' >
                <button className='btn w-100 text-start'>{value}</button>
            </div>
        )
    })
}
export default Labels;