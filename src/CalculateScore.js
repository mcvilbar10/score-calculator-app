import {useState} from 'react';

function CalculateScore(){
    const [inputs, setInputs] = useState({
        passORfail:"",
        errorHandler: "",
    });

    const handleChange =(event) =>{
        const fieldName=event.target.name;
        const fieldValue=event.target.value;   
        setInputs(values=>({...values,[fieldName]:fieldValue}));
    }   

    const handleSubmit =(event) =>{
        event.preventDefault();
        setInputs(values=>({...values,version:inputs.version+1}));
        if (inputs.first_name!=="" && inputs.last_name!=="")
        {
            let total=parseInt(inputs.score1) + parseInt(inputs.score2)+parseInt(inputs.score3);
            let average=total/3;
            if (average<75)
            {
                setInputs(values=>({...values,passORfail:"Failed"}));
            }
            else{
                setInputs(values=>({...values,passORfail:"Passed"}));
            }

        }
        else{
            setInputs(values=>({...values,errorHandler:"Need Value"}));
        }
    }

    return(
        <div>
        <form className='form' onSubmit={handleSubmit} >
            <div className='row'>
                <div className='col-sm-4'>
                    <label>First Name:</label> 
                    <input type="text" name="first_name" className="form-control text-input-field" 
                    value={inputs.first_name} onChange={handleChange}  />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Last Name:</label> 
                    <input type="text" name="last_name" className="form-control text-input-field" 
                     value={inputs.last_name} onChange={handleChange} />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 1:</label> 
                    <input type="number" name="score1" className="form-control number-input-field"
                     value={inputs.score1  } onChange={handleChange}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 2:</label> 
                    <input type="number" name="score2" className="form-control number-input-field"
                     value={inputs.score2 } onChange={handleChange}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 3:</label> 
                    <input type="number" name="score3" className="form-control number-input-field"
                    value={inputs.score3} onChange={handleChange} />
                </div>
            </div>
            <button type="submit">Submit</button>
            <div id="passORfail">{inputs.passORfail}</div>
            <div id="errorHandler">{inputs.errorHandler}</div>
        </form>
        </div>
    )
   
}

export default CalculateScore;