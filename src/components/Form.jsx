import React from 'react'
import './FormStyles.css'

export default function Form() {
  return (
    <div className='form-container'>
        <form className='form-content' action='http://localhost:8080/form' method='post'>
        <div class="row">
          <div class="col-25">
            <label for="fname">First Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="email">Email</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="email" placeholder="youremail@gmail.com.." required/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Message</label>
          </div>
          <div class="col-75">
            <textarea id="subject" name="subject" placeholder="Type your message here.." style={{height:'200px'}}></textarea>
          </div>
        </div>
        <div class="">
          <input type="submit" value="Submit" />
        </div>
  </form>
      
    </div>
  )
}
