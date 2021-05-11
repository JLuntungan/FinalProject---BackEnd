import React,{useState,useEffect} from 'react' 
import { Link } from 'react-router-dom'

import firebase from '../../config/Firebase'



const ListPeople = () => {

    const [users , setUsers] = useState([])


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

 
    return(
        <div>
            <hr></hr>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Profession</th>   
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                
                                <td>{item.birthday}</td>
                                <td>{item.gender}</td>
                                <td>{item.profession}</td>
                                
                                
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPeople;