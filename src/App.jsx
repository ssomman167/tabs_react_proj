import { useEffect, useState } from "react"
import "./index.css"
const url = 'https://course-api.com/react-tabs-project'


function App() {
    const [listdata,setListdata]=useState([])
    const [active,setActive]=useState(0)

    const fetchapi=async ()=>{
        const res=await fetch(url)
        const data=await res.json()
        console.log(data)
        setListdata(data)
    }

    useEffect(()=>{
        fetchapi()


    },[])

    

  return (
      <div className="App">
      <h1>Experience</h1>
    <div className="main">
{/* hello */}

<div className='left'>
  {
      listdata.map((elem,index)=>{
          return (
              index==active?
              <h1 key={elem.id}
            //   onClick={()=>{setActive(index)}}
               className="underline">{elem.company}</h1>
               : <h1 key={elem.id}
               onClick={()=>{setActive(index)}}
                >{elem.company}</h1>
          )
          
      })
  }
</div>

<div className='right'>
{
   listdata.map((elem,index)=>{
       if(active==index)
          return (
              <>

              <h1 key={elem.id} >{elem.title}</h1>
              {
                  elem.duties.map((e)=>{
                      return(
                          <li className="left">{e}</li>
                      )
                  })
              }
              </>
              
          )
      })

}
</div>

    </div>
    </div>
  )
}

export default App