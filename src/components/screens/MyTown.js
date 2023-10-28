import React, {useState, useEffect} from 'react'
import halifax from "../../images/halifax.jpg"
import cold from "../../images/cold.png"
import mild from "../../images/mild.png"
import sunny from "../../images/sunny.png"

const Town = () => {

    const [temp,setTemp] = useState(0)
    const [imgname, setImgname] = useState('cold')
    const [varname, setVarname] = useState("Change to °F")
    const [tempsymbol, setTempSymbol] = useState("°C")

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.64&lon=-63.57&appid=2dd4f7656d66a8ff5ac6d70242d6690e', 
        {
        }).then(res=>res.json())
        .then(result=>{
            console.log(result.main.temp - 273.15)
            setTemp(result.main.temp - 273.15)

            if ((result.main.temp - 273.15) >= 20)
            {
                setImgname('sunny')
            }

            
            if ((result.main.temp - 273.15) > 10 & (result.main.temp - 273.15) <= 20)
            {
                setImgname('mild')
            }


            if ((result.main.temp - 273.15) <= 10)
            {
                setImgname('cold')
            }

        })
    },[])


    const changeTemp = () => {
        
        if(varname === "Change to °F")
        {
            setVarname("Change to °C")
            setTemp(temp * 9/5 + 32)
            setTempSymbol("°F")
        }

        else
        {
            setVarname("Change to °F")
            setTemp((temp - 32)* 5/9)
            setTempSymbol("°C")
        }
        
    }



    return (
        <>
        <center><h3>I live in Halifax, NS</h3></center>

        <div class="aesthetic-line"></div>
        <div class="aesthetic-line"></div>

        <div class="row">
            <div class="col s10 offset-s1">
                <div class="card teal">
                    <div class="card-image">
                        <img className="halifax_image" src={halifax} alt='Halifax' />
                    </div>


                    <div className='row'>
                        <div className='col s12'>
                            <div class="card-content white-text flow-text center-align">
                                <br />
                                <p>Current Temperaure: {temp.toFixed(2)} {tempsymbol}</p>
                                <br />
                            </div>
                        </div>

                        <div className='col s12'>
                            <div class="card-content white-text flow-text center-align">
                                {imgname === "cold" && <img className="icon_image" src={cold} alt='temp_image' />}
                                {imgname === "mild" && <img className="icon_image" src={mild} alt='temp_image' />}
                                {imgname === "sunny" && <img className="icon_image" src={sunny} alt='temp_image' />} 
                            </div>
                        </div>

                        <div className='col s12'>
                            <div class="card-content white-text flow-text center-align">
                                <ul id="mav-mobile">
                                    <li ><submit onClick={()=>changeTemp()} className='waves-effect waves-light btn' to="/">{varname}</submit></li>
                                </ul>
                            </div>
                        </div>

                        

                    </div>

                        

                    
                     
                </div>
            </div>
         </div>
        
        <div class="aesthetic-line"></div>
        <div class="aesthetic-line"></div>
        </>
    )
}

export default Town