import './index.css'

interface ButtonProps {
    children: string ;
    onClick: () =>  any ;
}

export const Button = ({children , onClick}: ButtonProps) => {

  return (

    <button className="btn" onClick = {onClick}> {children} </button>

  )

}
