import left from '../images/bl.jpg'
import right from '../images/br.jpg'
function Btwo(){
    return (
       
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='mx-5'>Your <span className='purple'>Hobby</span> your <span className='text-primary'>Community...</span></h1>
                <button className='btn purbtn mx-5 my-2'>Get Started</button>
                <div className='d-flex m-4'>
                    <img src={left} className='imgb'/>
                    <img src={right} className='imgb'/>
                </div>
            </div>
        
            
       
       </div>
    )
}
export default Btwo;