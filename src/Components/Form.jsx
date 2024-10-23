import { useState } from 'react'
import supabase from '../Config/supabaseClient'

const Form = () => {
    const [run_name, setRunName] = useState('')
    const [run_desc, setRunDesc] = useState('')
    const [run_pace, setRunPace] = useState('')
    const [run_length, setRunLength] = useState('')
    const [run_severity, setRunSeverity] = useState('')
    const [formError, setFormError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        

        if (!run_name || !run_length || !run_pace || !run_desc || !run_severity) {
            setFormError('missing a field')
            console.log('Test')
            return
        }
        
        try {
            const { data, error } = await supabase
                .from('run-logs')
                .insert([{ run_name, run_length, run_pace, run_desc, run_severity }])
                console.log

            if (error) {
                console.error('Supabase error:', error)
                setErrorMessage('Failed to record the run. Please try again.')
            } else if (data) {
                setSuccessMessage('Run Recorded Successfully!')
                console.log('Sucess message set: ', successMessage)

            }
        } catch (err) {
            console.error('Error in form submission:', err)
            setErrorMessage('An unexpected error occurred.')
        }

 
    }
    

    return (
        <div className='page create'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='run_name' className='font-medium'> Give your run a name!:</label><br></br>
                <input
                    type = 'text'
                    id = 'run_name'
                    value = {run_name}
                    onChange = {(e) => setRunName(e.target.value)}
                /><br></br>
                <label htmlFor='run_length' className='font-medium'> How long was your run. <br></br>(In miles.)</label><br></br>
                <input
                    type = 'text'
                    id = 'run_length'
                    value = {run_length}
                    onChange = {(e) => setRunLength(e.target.value)}
                /><br></br>
                <label htmlFor='run_pace' className='font-medium'> What was the pace of this run? <br></br>(In min/mile.)</label><br></br>
                <input
                    type = 'text'
                    id = 'run_pace'
                    value = {run_pace}
                    onChange = {(e) => setRunPace(e.target.value)}
                /><br></br>
                <label htmlFor='run_desc' className='font-medium'> Describe your run. (Did you go anywhere new, see something funny?)</label><br></br>
                <input
                    type = 'text'
                    id = 'run_desc'
                    value = {run_desc}
                    onChange = {(e) => setRunDesc(e.target.value)}
                /><br></br>
                <label htmlFor='run_severity' className='font-medium'> How hard was this run for you? (Scale from 1-10):</label><br></br>
                
                <select
                    type = 'number'
                    id = 'run_severity'
                    value = {run_severity}
                    onChange = {(e) => setRunSeverity(e.target.value)}>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                    <option value = '5'>5</option>
                    <option value = '6'>6</option>
                    <option value = '7'>7</option>
                    <option value = '8'>8</option>
                    <option value = '9'>9</option>
                    <option value = '10'>10</option>


                </select><br></br>

                <button className='font-bold'>Record Run!!</button>
                {formError && <p className='error'>{formError}</p>}
                {successMessage && <p style = {{color:'green'}}className='success'>{successMessage}</p>}

            </form>
        </div>
    )
}


export default Form;