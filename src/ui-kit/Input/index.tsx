

interface Inputprops {
    type?: 'text' | 'textarea' ;
    placeholder: string ;
    value: string ;
    onChange: (value: string) => void ;
}

export const Input = ({type , placeholder , value , onChange} : Inputprops) => {

    console.log(value);
    
  return (
    <div>
        <input 
            type = 'text' 
            placeholder = {placeholder} 
            value = {value} 
            onChange={ (e) => onChange (e.target.value)} >
        </input>
        
    </div>
  )
}
