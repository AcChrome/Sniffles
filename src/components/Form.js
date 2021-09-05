import React, { useState } from "react";
import clsx from "clsx";
import "./Form.css";

// Import components from material-ui
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Avatar from "@material-ui/core/Avatar";

// material-ui styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  form: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "30ch",
  },
}));

function Form(props) {
  const classes = useStyles();
  const [name, setName] = useState(props.name || "");
  const [breed, setBreed] = useState(props.breed || "");
  const [gender, setGender] = useState(props.gender || "");
  const [age, setAge] = useState(props.age || "");
  const [size, setSize] = useState(props.size || "");
  const [location, setLocation] = useState(props.location || "");
  const [owner, setOwner] = useState(props.owner || "");
  const [email, setEmail] = useState(props.email || "");
  const [description, setDescription] = useState(props.description || "");
  const [imageUrl, setimageUrl] = useState(props.imageUrl || "");
  const [values, setValues] = useState({
    password: props.password || "",
    showPassword: false,
  });

  const dogGender = ["male", "female"];
  const dogSizes = ["small", "medium", "large"];

  const onSubmit = function (event) {
    event.preventDefault();
    console.log("submit clicked");
    const profile = {
      name,
      breed,
      gender,
      age,
      size,
      location,
      owner,
      email,
      description,
      password: values.password,
      imageUrl,
    };
    props.onSave(profile);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className="form">
      <div className="form_avatar">
        <Avatar alt={name} src={imageUrl} className={classes.avatar} />
      </div>
      <form
        autoComplete="off"
        className={classes.form}
        onSubmit={(e) => onSubmit(e)}
      >
        <FormControl>
          <InputLabel htmlFor="imageUrl">imageUrl</InputLabel>
          <Input
            className="form__create-input"
            name="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => {
              setimageUrl(e.target.value);
            }}
            placeholder="doggie profile pic"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            className="form__create-input"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Who's the good doggo?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="breed">Breed</InputLabel>
          <Input
            className="form__create-input"
            name="breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            placeholder="What kind of doggo?"
          />
        </FormControl>

        <TextField
          className="text_field"
          id="form__select-gender"
          select
          label="Gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          // SelectProps={{
          //   native: true,
          // }}
        >
          {dogGender.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <FormControl>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input
            className="form__create-input"
            name="age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="How old is the doggo?"
          />
        </FormControl>

        <TextField
          className="text_field"
          id="form__select-size"
          select
          label="Size"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          {dogSizes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <FormControl>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input
            className="form__create-input"
            name="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Which city is doggo from?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="owner">Owner</InputLabel>
          <Input
            className="form__create-input"
            name="owner"
            type="text"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            placeholder="Who picks up the poop?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            className="form__create-input"
            name="description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="What does the doggo like?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            className="form__create-input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Change Email"
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Change Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          {props.submit}
        </Button>
      </form>
    </div>
  );
}

export default Form;
