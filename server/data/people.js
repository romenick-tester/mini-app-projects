import { randomBytes } from "crypto"

const people = [
   {
      id: randomBytes(4).toString("hex"),
      name: "John Doe",
      image: "https://i.ibb.co/N1XF3Ds/025.png",
      birthYear: 1990,
      birthMonth: 7,
      birthDay: 20
   },
   {
      id: randomBytes(4).toString("hex"),
      name: "Jane Smith",
      image: "https://i.ibb.co/P5mVRVG/007.png",
      birthYear: 1989,
      birthMonth: 7,
      birthDay: 8
   },
   {
      id: randomBytes(4).toString("hex"),
      name: "Joe Bloggs",
      image: "https://i.ibb.co/0ZM3txS/004.png",
      birthYear: 1987,
      birthMonth: 8,
      birthDay: 1
   },
   {
      id: randomBytes(4).toString("hex"),
      name: "Santa Clause",
      image: "https://i.ibb.co/XX6Skzt/001.png",
      birthYear: 1980,
      birthMonth: 11,
      birthDay: 15
   }
]

export default people;