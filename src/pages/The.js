import audio from '../images/Ringtone.mp3'
import dancer from '../images/dancer.jpg'
function The() {
  return (
    <div className=''>
      <div className="m-3">
      <div className="row">
        <div className=" col-md-11 p-5 border rounded m-3">
            <div className="d-flex"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#085ae7" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg><h3 className="mx-3">Add Your Own</h3></div>
            <p className="my-3">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            <button className="px-4 btn outline purple">Add New</button>
        </div>
        <div className=" col-md-11 p-5 border rounded m-3">
            <div className="d-flex"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 320 512"><path fill="#0557e6" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg><h3 className="mx-3">Testimonials</h3></div>
            <p className="my-3">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
           <div className="d-flex">
           <audio controls><source src={audio} type="audio/mp3"/>
           </audio>
           <img src={dancer} className='imgrou'/>
           <div className='d-flex justify-content-center aline'>
           <img src={dancer} className='imgrou gap'/>
           <div >
            <h6>Shubha Nagarajan</h6>
            <p className='text-primary'>Classical Dancer</p>
           </div>
           </div>
           
           </div>
        </div>
       
      </div>
    </div>
    </div>
  );
}

export default The;