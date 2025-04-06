import { useState } from "react"

const ListItem = (props) =>{

    const [ checked , setChecked] = useState(false)

    return(
        <div>
            <input checked={checked} onChange={()=>setChecked(!checked)} type="checkbox"/>
            <span style={{textDecoration: checked ? "line-through":"none"}}>{props.activity}</span>
        </div>
    )
}
export default ListItem