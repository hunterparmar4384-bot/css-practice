import { useState } from "react"

const First = ({val}) =>{
    
    const total = (i) =>{
        return  (
            i.S1 + i.S2 + i.S3 + i.S4 + i.S5
        )
     }
     const per = (i) =>{
        return(
             total (i)/ 5
        )
     }
     const min = (i) =>{
        return(
             Math.min(i.S1,i.S2,i.S3,i.S4,i.S5)
        )
     }
     const max = (i) =>{
        return(
            Math.max(i.S1,i.S2,i.S3,i.S4,i.S5)
        )
     }
     
    return(

                
     <>
     <table border={2}>
        <tr>
            <td>NAME</td>
            <td>S1</td>
            <td>S2</td>
            <td>S3</td>
            <td>S4</td>
            <td>S5</td>
            <td>TOTAL</td>
            <td>PER</td>
            <td>MIN</td>
            <td>MAX</td>
        </tr>

        {
            val.map((i,index)=>{
                return(
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.S1}</td>
                        <td>{i.S2}</td>
                        <td>{i.S3}</td>
                        <td>{i.S4}</td>
                        <td>{i.S5}</td>
                        <td>{total(i)}</td>
                        <td>{per(i)}</td>
                        <td>{min(i)}</td>
                        <td>{max(i)}</td>
                    </tr>
                )
            })
        }
     </table>

     </>
    )
}
export default First;