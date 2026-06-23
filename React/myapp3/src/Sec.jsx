// const Sec = ({val}) =>{
//     return(
//         <>
//             <h1>{val}</h1>
//         </>
//     )
// }

// const Sec = ({val}) =>{
//     return(
//         <>
//             <h1>{val.name}</h1>
//             <h1>{val.age}</h1>
//         </>
//     )
// }

// const Sec = ({val}) =>{
//     return(
//         <>
//         <h1>{val[0].name}</h1>
//         <h1>{val[0].age}</h1>

//         <h1>{val[1].name}</h1>
//         <h1>{val[1].age}</h1>
       
//        <h1>{val[2].name}</h1>
//        <h1>{val[2].age}</h1>

//         </>
//     )
// }

const Sec =({val}) =>{
    return(
        <table border={1}>
            <tr>
                <td>NAME</td>
                <td>AGE</td>
            </tr>

            {val.map((i,index)=>{
                return(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                    </tr>
                )
            })}
        </table>
    )
}
export default Sec;