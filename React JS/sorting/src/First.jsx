import React, { useState } from 'react'



function First() {
     const arr = [{name:"Rose", cat:"Flower"},
                  {name:"Sunflower", cat:"Flower"}, 
                  {name:"Marigold", cat:"Flower"},
                  {name:"Orchid", cat:"Flower"},
                  {name:"Lotus", cat:"Flower"},
                  {name:"Dog", cat:"Animal"},
                  {name:"Cat", cat:"Animal"},
                  {name:"Lion", cat:"Animal"},
                  {name:"Lion", cat:"Animal"},
                  {name:"Tiger", cat:"Animal"},
                  {name:"Crow", cat:"Bird"},
                  {name:"Sparrow", cat:"Bird"},
                  {name:"Parrot", cat:"Bird"},
                  {name:"Pigeon", cat:"Bird"},
                  {name:"Peacock", cat:"Bird"}
     ]

     const [Data, setData] = useState([])

     const handleall =()  => {
        setData(arr);      
        
     } 
     
     const handlefillter = (category) =>{
        const result =  arr.filter((item) => item.cat === category)
        setData(result)
     }

  return (
    <>
    <h2 className='text-center'>click The button and show flowers,Animals And Birds name</h2>
    <div className='box'>        
        <button onClick={handleall}>ALL</button>
        <button onClick={()=>handlefillter("Flower")}>FLOWERS</button>
        <button onClick={()=>handlefillter("Animal")}>ANIMALS</button>
        <button onClick={()=>handlefillter("Bird")}>BIRDS</button>      
        <br/><br/>        
    </div>
    <table >
            <thead >
                <tr >
                    <td className='tb'> NAME</td>
                    <td className='tb'>CATEGORY</td>
                </tr>
            </thead>  
            <tbody>
                {
                    Data.map((arr,index) =>(
                        <tr key={index}>
                            <td className='tb'>{arr.name}</td>
                            <td className='tb'>{arr.cat}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    
    </>
  )
}
export default First
