import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://rtcamp.com/">
                        <img src="https://rtcamp.com/wp-content/uploads/sites/2/2020/11/site-logo-black.svg" alt="rtcamp" width="140" height="44" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <form class="d-flex" role="search">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="https://rtcamp.com/case-studies/">Case Studies</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="https://rtcamp.com/solutions/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Solutions
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="https://rtcamp.com/staff-augmentation/">Staff Augmentation</a></li>
                                        <li><a class="dropdown-item" href="https://rtcamp.com/migration-to-wordpress/">Migration-to-Wordpress</a></li>
                                       
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="https://rtcamp.com/careers/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Careers
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="https://rtcamp.com/careers/#open-positions">Open Positions</a></li>
                                        <li><a class="dropdown-item" href="https://learn.rtcamp.com/courses/">Courses</a></li>
                                    
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="https://rtcamp.com/about/">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="https://rtcamp.com/blog/">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="https://rtcamp.com/contact/">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </form>
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar
