"use client"

import { useState } from "react"
import { getEnquiries } from "../../../server_actions/actions/userActions"
import { checkPassword } from "../../../server_actions/actions/adminActions"

export default function Home() {
    const [enquiries, setEnquiries] = useState([{}])
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    const fetchEnquirues = async () => {
        const response = await getEnquiries();
        setEnquiries(response);
    }

    async function checkAuthentication(){
      const response = await checkPassword(password);
      console.log(password);
        if(response){
            setAuthenticated(true);
            fetchEnquirues();
        }
    }

    return  (
        <>
        <div className="container flex d-flex justify-content-center align-items-center">
            <h2 className="display-4 m-4">Admin Dashboard</h2>
        </div>

        {!authenticated ? 
        

        <div className="admin-login flex d-flex justify-content-center align-items-center">
            <input type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => checkAuthentication()}>
                Login
            </button>
        </div>

        :

        <div className="d-flex justify-content-center " style={{height: '80vh'}}>
        <div>
        <table className="table table-responsive table-striped table-dark">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Student Name</th>
              <th>Mobile No.</th>
              <th>Interest</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((student, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.mobileNo}</td>
                    <td>{student.interest}</td>
                    <td>{student.query}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        }
        </>
    )
}