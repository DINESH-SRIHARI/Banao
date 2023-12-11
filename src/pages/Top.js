import left from '../images/tl.jpg'
import right from '../images/tr.jpg'
function Top(){
    return (
        <div className='row'>
            <div className=" topp flex col-md-8 topp ">
            <div className="m-5">
                <h2 className="font-italic m-5">Explore your <span className="text-primary">hobby</span > or <span className="purple">passion</span></h2>
                <p className="mx-5">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...</p>


<p className="mx-5">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride</p>
            <div className="d-flex m-5">
                <img src={left} className='imgt'/>
                <img src={right} className='imgt'/>
            </div>
            </div>
            <div className='col-md-6 m-5 topp'>
                <div className='d-flex m-5'>
                    <h4 className='mx-3 colt'>Sign In</h4>
                    <h4>Join In</h4>
                </div>
                <div>
                <button className='d-flex btn  btn-block outline p-2'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg><p className='mx-5 tfw'>Continue With   Google </p></button>
<button className='d-flex btn outline btn-block p-2 my-3'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg><p className='mx-5 tfw'>Continue With Facebook      </p></button>
                </div>
                <p>----------------Or Connect With-------------</p>
                <div>
                    <input placeholder='Email' className='width3 p-2 mx-2 my-3 inpt'/>
                    <input placeholder='password' className='width3 p-2 mx-2 inpt'/>
                </div>
                <div className='d-flex  aline'>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">  Remember Me</label>
                <div className='d-flex margin aline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg><p className='mt'>Forget Password?</p>
                </div>
                </div>
                <button className='btn btn-outline-dark px-5 inpt'>Continue</button>
            </div>
        </div>

        </div>
    )
}
export default Top;