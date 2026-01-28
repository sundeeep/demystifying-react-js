import ProfileCard from './ProfileCard'
const employees = [
  {
    id: 1,
    name: "Sundeeep Dasari",
    designation: "Product Manager"
  },
  {
    id: 2,
    name: "Suresh",
    designation: "Fullstack developer"
  },
  {
    id: 3,
    name: "Harshitha",
    designation: "React native developer"
  }
]

const EmployeesList = () => {

  // employees.map((employee) => (console.log(employee)))
  // () => ()
  // () => { return }
  // () => 
    
  return (
    <div>
      {
        employees.map((employee) => (
          <ProfileCard key={employee.id} name={employee.name} designation={employee.designation} />
        ))
      }
    </div>
  )
}

export default EmployeesList