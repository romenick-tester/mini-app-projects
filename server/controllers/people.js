import data from "../data/people.js"

let people = [...data]

const getPeople = (req, res) => {
   let tempPeople = people;

   tempPeople = tempPeople.filter(p => p.birthMonth === +req.params.month)

   if (tempPeople.length > 0) {
      res.status(200).json(tempPeople)
   } else {
      res.status(200).json("There are no birthdays today.")
   }

}

export {
   getPeople
}