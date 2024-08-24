const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
     <th>Name</th>
     <th>Type of Satellite</th>
     <th>Launch Date</th>
     <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((satellite, id) => {
        return (
          <tr key={id}>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
            <td>{satellite.launchDate}</td>
            <td>{satellite.operational}</td>
          </tr>
        );
      })}
     </tbody>
   </table>
  );
};

export default Table;