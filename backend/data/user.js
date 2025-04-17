import bcrypt from "bcrypt";

const users = [
  {
    fullName: "Taimoor Haider",
    email: "taimoor@yopmail.com",
    password: bcrypt.hashSync("dsaq@2248", 10),
    phoneNumber: "03114193286",
    profileImageUrl: "pic1",
    isAdmin: true,
  },
  {
    fullName: "Ayesha Khan",
    email: "ayesha@yopmail.com",
    password: bcrypt.hashSync("ayesha1234", 10),
    phoneNumber: "03214567890",
    profileImageUrl: "pic2",
    isAdmin: false,
  },
  {
    fullName: "Ali Raza",
    email: "ali@yopmail.com",
    password: bcrypt.hashSync("ali@12345", 10),
    phoneNumber: "03331234567",
    profileImageUrl: "pic3",
    isAdmin: false,
  },
];

export default users;
