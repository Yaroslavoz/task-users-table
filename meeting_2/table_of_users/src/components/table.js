import React,  {useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersFetchData } from '../actions/users'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Table = () => {
  const [checkedUsers, setChecked] = useState([])
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  console.log(checkedUsers)
  


  useEffect(() => {
    dispatch(usersFetchData(URL))
}, [dispatch])

  const checkHandler = (id) => {
    setChecked(checkedUsers.includes(id) 
    ? checkedUsers.filter(it => it !== id) 
    : [...checkedUsers, id])
  }

  const checkAll = () => {
    setChecked(
      checkedUsers.length !== users.length 
      ? users.map((it)=> it.id) 
      :[]
    )
  }

  const headerElement = ['id', 'name', 'email', 'phone', 'choose']
  const renderHeader = () => {
    

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = () => {
    return users && users.map(({ id, name, email, phone }) => {
        return (
            <tr key={id}>
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">{email}</td>
                <td className="px-4 py-2">{phone}</td>
                <td className='check-box'>
                  <input className="mr-2 leading-tight" type="checkbox" onChange={()=>checkHandler(id)} checked={checkedUsers.includes(id)} />
                </td>
            </tr>
        )
    })
  }

  if (users.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (users.isLoading) {
      return <p>Loading…</p>;
  }
  return (
    <>
        <h1 id='title'>Users Table</h1>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3" />
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" onChange={ checkAll} checked={users.length === checkedUsers.length}/>
            <span className="text-sm">
              Choose all!
            </span>
          </label>
        </div>
        <table id='users' className="table-auto">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
          <tfoot>
            <tr>
            <td colSpan={5}>
                <textarea className="w-full" placeholder={
                  users.filter((it)=> checkedUsers.includes(it.id))
                  .map(e => e.name ).join(", ")
                } />
              </td>
            </tr>
          </tfoot>
          
          
        </table>
       
        </>
        )


}


export default Table