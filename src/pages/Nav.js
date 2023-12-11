function Nav(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary white">
  <div className="container-fluid" >
    
  <a class="navbar-brand mx-5" href="#">
    <div className="d-flex">
        <div>
            <h1 className="text-primary font-italic head px-3 m-0">h</h1>
        </div>
        <div>
            <h3><span className="text-primary font-italic my">hobby</span><span className="purple font-italic">cue</span></h3>
            <p className="text-muted font-italic my">your hobby,your community</p>
        </div>
    </div>
      
    </a>
    <form className="d-flex mx-5 " role="search">
        <input className="form-control me-2 bar ser" type="search" placeholder="Search here...." aria-label="Search"/>
        <button className="btn search" type="submit" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>Explore
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">People-Community</a></li>
            <li><a className="dropdown-item" href="#">Places-Venues</a></li>
            <li><a className="dropdown-item" href="#">Programs-Events</a></li>
            <li><a className="dropdown-item" href="#">Products-Store</a></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark items" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>Hobbies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">People-Community</a></li>
            <li><a className="dropdown-item" href="#">Places-Venues</a></li>
            <li><a className="dropdown-item" href="#">Programs-Events</a></li>
            <li><a className="dropdown-item" href="#">Products-Store</a></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
          </ul>
        </li>
        <li className="mx-3 my-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 384 512"><path fill="#7e16b6" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
        </li>
        <li className="mx-3"><svg xmlns="http://www.w3.org/2000/svg" height="36" width="24" viewBox="0 0 448 512"><path fill="#7e16b6" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></li>
        <li className="mx-3"><svg xmlns="http://www.w3.org/2000/svg" height="38" width="24" viewBox="0 0 576 512"><path fill="#7e16b6" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></li>
      </ul>
      <button className="btn purple outline mx-3">sign in</button>
      
    </div>
  </div>
</nav>
        </div>
    )
}
export default Nav;