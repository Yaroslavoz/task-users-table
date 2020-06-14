import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { usersFetchData } from '../actions/users'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Table = (props) => {
  console.log(props)
  
  useEffect((props) => {
    props.fetchData(URL)
}, [])

  const renderHeader = () => {
    let headerElement = ['id', 'name', 'email', 'phone', 'choose']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (props) => {
    return props.map(({ id, name, email, phone }) => {
        return (
            <tr key={id}>
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">{email}</td>
                <td className="px-4 py-2">{phone}</td>
                <td className='check-box'>
                    
                </td>
            </tr>
        )
    })
  }

  if (props.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (props.isLoading) {
      return <p>Loading…</p>;
  }
  return (
    <>
        <h1 id='title'>Users Table</h1>
        <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3" />
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">
              Choose all!
            </span>
          </label>
        </div>
        <table id='users' className="table-auto">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody(props)}
            </tbody>
        </table>
    </>
)


}

const mapStateToProps = (state) => {
  return {
      users: state.users,
      hasErrored: state.usersHasErrored,
      isLoading: state.usersIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(usersFetchData(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)