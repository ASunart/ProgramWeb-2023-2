export function Table({ customers }) {
    const customersLength = customers.length > 0
  
    if (!customersLength) {
      return <p>There are no results for your search</p>
    }
  
    return (
      <div className='layout-column align-items-center justify-content-start'>
        <div className='card pt-30 pb-8 mt-20'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              {
                  customers.map(({ name, age, location, gender, income }) => {
                    return (
                      <tr key={name.toLowerCase()}>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{location}</td>
                        <td>{gender}</td>
                        <td>{income}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  