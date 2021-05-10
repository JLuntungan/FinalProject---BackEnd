import React,{useState,useEffect} from 'react' 
import { Link } from 'react-router-dom'

import firebase from '../../config/Firebase'



const CRUD = () => {

    const [firstName ,setFirstName] = useState("")
    const [lastName ,setlastName] = useState("")
    const [nik,setNik] =useState("")
    const [birthday, setbirthday] = useState("")
    const [gender, setGender] = useState("")
    const [profession, setProfession] = useState("")
    const [telp, setTelp] = useState("")
    const [users , setUsers] = useState([])
    const [button , setButton] = useState("Save")
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        firebase.database()
        .ref("users")
        .on("value",(res)=>{
            if(res.val()){
                //ubah menjadi Array object
                const rawData = res.val();
                const usersArr = [];
                Object.keys(rawData).map(item => {
                    usersArr.push({
                        id: item,
                        ...rawData[item],
                    });
                }); 
                setUsers(usersArr);
            }
        });
    },[]);

 
    const resetForm =()=>{
        setFirstName("");
        setlastName("");
        setNik("");
        setbirthday("");
        setGender("");
        setProfession("");
        setTelp("");
        setButton("Save");
        setSelectedUsers({});
    };

    const onSubmit=()=>{
        const data = {
            firstName: firstName,
            lastName :lastName,
            nik:nik,
            birthday:birthday,
            gender: gender,
            profession:profession,
            telp :telp
        }
        if(button === 'Save'){
            //insert
            firebase.database().ref('users').push(data);
        } else{
            //update
            firebase.database().ref(`users/${selectedUsers.id}`).set(data);
        }
        resetForm();
    }

    const onUpdateData =(item) =>{
        setFirstName(item.firstName);
        setlastName(item.lastName);
        setNik(item.nik);
        setbirthday(item.birthday);
        setGender(item.gender);
        setProfession(item.profession);
        setTelp(item.telp);
        setButton("Update");
        setSelectedUsers(item);
    };

    const onDeleteData =(item) =>{
        firebase.database().ref(`users/${item.id}`).remove()
    }

    return(
        <div className="container mt-5">
        <h3>Add Data</h3>
            <div className="col-7">
                <p>First Name</p>
                <input 
                    className="form-control" 
                    placeholder="Type first name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}></input>
                <p>Last Name</p>
                <input 
                    className="form-control"
                    placeholder="type last name" 
                    value={lastName} 
                    onChange={(e) => setlastName(e.target.value)}></input>
                <p>NIK</p>
                <input 
                    className="form-control"
                    placeholder="type NIK" 
                    value={nik} 
                    onChange={(e) => setNik(e.target.value)}></input>
                <p>Birthday</p>
                <input 
                    className="form-control" 
                    placeholder="dd-mm-yyyy / 25-01-2001" 
                    value={birthday} 
                    onChange={(e) => setbirthday(e.target.value)}></input>
                <p>Gender</p>
                <input 
                    className="form-control" 
                    placeholder="Male or Female" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}></input>   
                <p>Profession</p>
                <input 
                    className="form-control" 
                    placeholder="Type Profession" 
                    value={profession} 
                    onChange={(e) => setProfession(e.target.value)}></input>    
                <p>No Handphone</p>
                <input 
                    className="form-control" 
                    placeholder="Type No handphone" 
                    value={telp} 
                    onChange={(e) => setTelp(e.target.value)}></input>   
                <br></br>
               
                <button className="btn btn-dark" onClick={onSubmit}> {button} </button>
                {
                    button === "Update" && (
                        <button className="btn btn-light" onClick={resetForm}>Cancel Update</button>
                    )
                }
                
            
            </div>
            <hr></hr>
            <hr></hr>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>NIK</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Profession</th>
                        <th>No Telp</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.nik}</td>
                                <td>{item.birthday}</td>
                                <td>{item.gender}</td>
                                <td>{item.profession}</td>
                                <td>{item.telp}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>onUpdateData(item)}>Update</button>
                                    <button className="btn btn-danger" onClick={()=>onDeleteData(item)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default CRUD;