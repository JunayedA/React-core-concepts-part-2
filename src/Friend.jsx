export default function Friend({friend}){
    const {name, email} = friend
    return(
        <div>
            <li>name:{name}</li>
            <li>Email:{email}</li>
        </div>
    )
}