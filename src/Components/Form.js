import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";

function Form() {
  //   const [values, setValues] = useState({
  //     email: "",
  //     username: "",
  //     gender: "",
  //     age: "",
  //   });

  const [tempDetail, setTempDetail] = useState({});

  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      fetchUsers();
    })();
  }, []);
  const fetchUsers = async () => {
    const url = "https://dummyjson.com/users";
    const result = await axios.get(url);
    //console.log(result?.data?.users);
    // const userdata = result;
    // console.log(userdata?.data?.users);
    // setUserData(userdata?.data?.users);
    // console.log(tempDetail);
    // setTempDetail(tempDetail);
  };

  const handleChangeUser = (e) => {
    if (e.target.name === "firstName") {
      tempDetail.firstName = e.target.value;
    } else if (e.target.name === "email") {
      tempDetail.email = e.target.value;
    } else if (e.target.name === "username") {
      tempDetail.username = e.target.value;
    } else if (e.target.name === "city") {
      tempDetail.city = e.target.value;
    } else if (e.target.name === "age") {
      tempDetail.age = e.target.value;
    } else if (e.target.name === "gender") {
      tempDetail.gender = e.target.value;
    }
    console.log(tempDetail);
    setTempDetail(Object.assign({}, tempDetail));
  };
  return (
    <div>
      <form style={{ margin: "12px" }}>
        {userdata.map((s, i) => {
          return (
            <div key={i}>
              <TextField
                id="outlined-basic"
                label="FirstName"
                margin="dense"
                variant="outlined"
                name="firstName"
                value={s.firstName}
                onChange={handleChangeUser}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Email"
                margin="dense"
                variant="outlined"
                name="email"
                value={s.email}
                onChange={handleChangeUser}
              />

              <br />
              <TextField
                id="outlined-basic"
                label="Username"
                margin="dense"
                variant="outlined"
                name="username"
                value={s.username}
                onChange={handleChangeUser}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Gender"
                margin="dense"
                variant="outlined"
                name="gender"
                value={s.gender}
                onChange={handleChangeUser}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="City"
                margin="dense"
                variant="outlined"
                name="city"
                value={s.address.city}
                onChange={handleChangeUser}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Age"
                margin="dense"
                variant="outlined"
                name="age"
                value={s.age}
                onChange={handleChangeUser}
              />
              <br />
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Form;
