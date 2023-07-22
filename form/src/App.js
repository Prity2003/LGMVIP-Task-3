import React, { useState } from 'react';
import './App.css';

function App() {

  // const genderList=[
  //   {value:"male", label:'Male'},
  //   {value:"female", label:'Female'},
  //   {value:"other", label:'Other'},
  // ];
  const [tableData,setTableData]=useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pwd: "",
    enroll: "",
    contact: "",
    gender:"",
    dob: "",
    branch: "",
    city: "",
    errors: {},
    loading: false
  });

  const handleUserInput = (e) => {
    // console.log(e.target.value, "eeee")
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData({ ...formData, [name]: value });

    const newInput = (data)=>({...data,[e.target.name]:e.target.value});
      setFormData(newInput);
  }

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    console.log(formData, "formData");

    if (!formData.name.length) {
      formIsValid = false;
      errors["name"] = 'This field is required';
    }
    if (!formData.email.length) {
      formIsValid = false;
      errors["email"] = 'This field is required';
    }
    if (formData.email.length) {
      let emailValid = formData.email.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      if (!emailValid) {
        formIsValid = false;
        errors["email"] = `Email is invalid`;
      }
    }
    if (!formData.pwd.length) {
      formIsValid = false;
      errors["pwd"] = 'This field is required';
    }
    if (formData.pwd.length) {
      let passvalue = formData.pwd;
      let passwordValid = passvalue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,99}$/);
      if (!passwordValid) {
        formIsValid = false;
        errors['pwd'] =
          'Password must be minimum of 8 characters, contain a capital letter, and a numeric digit';
      }
    }
    if (!formData.enroll.length) {
      formIsValid = false;
      errors["enroll"] = 'This field is required';
    }
    if (!formData.contact.length) {
      formIsValid = false;
      errors["contact"] = 'This field is required';
    }
    console.log(formData.gender);
    if (!formData.gender.length) {
      formIsValid = false;
      errors["gender"] = 'This field is required';
    }
    if (!formData.dob.length) {
      formIsValid = false;
      errors["dob"] = 'This field is required';
    }
    console.log(formData.branch);
    if (!formData.branch.length) {
      formIsValid = false;
      errors["branch"] = 'This field is required';
    }
    if (!formData.city.length) {
      formIsValid = false;
      errors["city"] = 'This field is required';
    }
    setFormData({ ...formData, errors: errors });
    return formIsValid;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmptyInput = !Object.values(formData).every(res=>res==="")
    if(checkEmptyInput){
      const newData = (data)=>([...data,formData]);
      setTableData(newData);
      const emptyInput = {
        name:'',
        email:'',
        pwd:'',
        enroll:'',
        contact:'',
        gender:'',
        dob:'',
        branch:'',
        city:''
      }
      setFormData(emptyInput);
    }

    if (validateForm()) {
      setFormData({ ...formData, loading: true });
    }
    // console.log(this.formData);
   
  }

  return (
    <>
        <h1>Student Registration Form</h1>
      <div className='main'>
        <div className='form'>
          <form>
            <div className='form-info'>
              <label for="name">Name:</label><br/>
              <input type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleUserInput}
              />
              {formData.errors.name && (
                <div className="error-label">
                  {' '}
                  {formData.errors.name}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="email">Email:</label><br/>
              <input type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleUserInput}
              />
              {formData.errors.email && (
                <div className="error-label">
                  {' '}
                  {formData.errors.email}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="pwd">Password:</label><br/>
              <input type='password'
                id='pwd'
                name='pwd'
                value={formData.pwd}
                onChange={handleUserInput}
              />
              {formData.errors.pwd && (
                <div className="error-label">
                  {' '}
                  {formData.errors.pwd}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="enroll">Enrollment No:</label><br/>
              <input type='text'
                id='enroll'
                name='enroll'
                value={formData.enroll}
                onChange={handleUserInput}
              />
              {formData.errors.enroll && (
                <div className="error-label">
                  {' '}
                  {formData.errors.enroll}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="contact">Contact:</label><br/>
              <input type='text'
                id='contact'
                name='contact'
                value={formData.contact}
                onChange={handleUserInput}
              />
              {formData.errors.contact && (
                <div className="error-label">
                  {' '}
                  {formData.errors.contact}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="gender">Gender:</label><br/>
              <input type='radio'
                id='male'
                name='gender'
                value="male"
                onChange={handleUserInput}
              />
              <label for="male">Male</label>
              <input type='radio'
                id='female'
                name='gender'
                value="female"
                onChange={handleUserInput}
              />
              <label for="female">Female </label>
              <input type='radio'
                id='other'
                name='gender'
                value="other"
                onChange={handleUserInput}
              />
              <label for="other">Other</label>
              {formData.errors.gender && (
                <div className="error-label">
                  {' '}
                  {formData.errors.gender}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="dob">Date of Birth:</label><br/>
              <input type='date'
                id='dob'
                name='dob'
                value={formData.dob}
                onChange={handleUserInput}
              />
              {formData.errors.dob && (
                <div className="error-label">
                  {' '}
                  {formData.errors.dob}
                </div>
              )}
            </div>
            <div className='form-info'>
              <label for="branch">Branch:</label><br/>
              <input type='radio'
                id='it'
                name='branch'
                value='it'
                onChange={handleUserInput}
              />IT
              <input type='radio'
                id='cse'
                name='branch'
                value='cse'
                onChange={handleUserInput}
              />CSE
              {formData.errors.branch && (
              <div className="error-label">
                {' '}
                {formData.errors.branch}
              </div>
            )}
            </div>
            <div className='form-info'>
              <label for="city">City:</label><br/>
              <input type='text'
                id='city'
                name='city'
                value={formData.city}
                onChange={handleUserInput}
              />
              {formData.errors.city && (
              <div className="error-label">
                {' '}
                {formData.errors.city}
              </div>
            )}
            </div>
            <div className='form-info'>
              <button onClick={handleSubmit}>Submit</button>
            </div>
      </form>
    </div >
  <div className='form-table'>
    <h2>Enrolled Students</h2>
    <table border={1}>
      <thead>
      <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Enrollment No</th>
      <th>Contact</th>
      <th>Gender</th>
      <th>Date of Birth</th>
      <th>Branch</th>
      <th>City</th>
      </tr>
      </thead>
      <tbody>{tableData.map((data,index)=>{
        return(
          <tr key={index}>
            {/* <td>{index+1}</td> */}
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.enroll}</td>
            <td>{data.contact}</td>
            <td>{data.gender}</td>
            <td>{data.dob}</td>
            <td>{data.branch}</td>
            <td>{data.city}</td>
          </tr>)
      })}
      </tbody>
    </table>
  </div>
  </div >
        </>
      )
}

export default App;
