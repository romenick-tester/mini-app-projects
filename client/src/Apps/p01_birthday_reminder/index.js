import { useState, useEffect } from "react"

const BirthdayReminder = () => {
   const [people, setPeople] = useState([])
   const [loading, setLoading] = useState(false)

   const fetchPeople = async () => {
      setLoading(true)
      const currentMonth = new Date().getMonth() + 1;
      try {
         const res = await fetch("/api/people/birthday/" + currentMonth)
         const data = await res.json()

         if (!res.ok) throw new Error(data.message)

         setPeople(data)
      } catch (err) {
         console.error(err.message)
      }
      setLoading(false)
   }

   useEffect(() => {
      fetchPeople()
   }, [])

   if (loading) {
      return (
         <div className="container">
            <h1>loading...</h1>
         </div>
      )
   }

   return (
      <div className="container">
         <h1>{people.length} Birthdays Today</h1>
         {people.length > 0 && (
            people.map((person, index) => (
               <article key={index + 1} className="person">
                  <button className="del_btn">x</button>
                  <div className="person_img">
                     <img src={`./assets/p01_birthday_reminder/${person.image}`} alt={person.name} />
                  </div>
                  <div className="person_info">
                     <h4>{person.name}</h4>
                     <p>{2021 - person.birthYear} years</p>
                  </div>
               </article>
            ))
         )}
         <button className="btn">Clear All</button>
      </div>
   )
}

export default BirthdayReminder