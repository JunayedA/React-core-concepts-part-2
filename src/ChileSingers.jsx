export default function ChileSingers ({props}){
    console.log(props)
    let {name, age} = props
    return <li>Singer name: {name} and age: {age} </li>
}