import React, { useEffect, useId, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const MyAddedPets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const { user } = useAuth();
  const userEmail = user.email;

  useEffect(() => {
    fetch('https://server-twelve.vercel.app/pet')
      .then(res => res.json())
      .then(data => {
        const filteredData = data
          .filter(pet => pet.addemail === user.email)
          .map((pet) => ({ ...pet }));
        setPets(filteredData);
      });
  }, [userEmail]);

  const data = useMemo(() => pets, [pets]);

  const columns = useMemo(
    () => [
     
      {
        Header: "Pet Name",
        accessor: "name",
      },
      {
        Header: "Pet Breed",
        accessor: "breed",
      },
      {
        Header: "Pet Category",
        accessor: "status",
      },
      {
        Header: "Pet Image",
        accessor: "image",
        Cell: ({ value }) => <img src={value} alt="Pet" className="rounded-3xl h-20 w-16" />,
      },
      {
        Header: "Adoption Status",
        accessor: "adopted",
        Cell: ({ value }) => (value ? "Adopted" : "Not Adopted"),
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div>
           <NavLink to={`/dashboard/update/${row.original._id}`}>
           <button
              onClick={() => navigate(`/update-pet/${row.original_id}`)}
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
            >
              {/* ######################################################## */}
              Update
            </button>
           </NavLink>
            <button
              onClick={() => handleDelete(row.original._id)}
              className="bg-red-500 text-white px-2 py-1 rounded mr-2"
            >
              Delete
            </button>
            
            <button
              onClick={() => toggleAdoptionStatus(row.original._id)}
              className={`${
                row.original.adopted ? 'bg-gray-500' : 'bg-green-500'
              } text-white px-2 py-1 rounded`}
            >
              {row.original.adopted ? 'Already Adopted' : 'Adopted'}
            </button>
          </div>
        ),
      },
    ],
    [navigate]
  );


  
  const handleDelete = (id) => {
    console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://server-twelve.vercel.app/pet/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Filter out the deleted item from the state
            const updatedpets = pets.filter(item => item._id !== id);
           console.log(updatedpets);
             // Update the state
            Swal.fire({
              title: "Deleted!",
              text: "Your Spot has been deleted.",
              icon: "success"
            });
            setPets(updatedpets);
          }
        })
        .catch(error => {
          console.error("Error deleting spot:", error);
          // Handle error if deletion fails
        });
    }
  });
  };

  const toggleAdoptionStatus = (id) => {
    fetch(`https://server-twelve.vercel.app/pet/adopt/${id}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(() => {
      setPets(prevPets =>
        prevPets.map(pet =>
          pet._id === id ? { ...pet, adopted: !pet.adopted } : pet
        )
      );
    });
  };

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 7 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-3xl">My Added Pets</h1>
        <h1 className="text-white font-bold text-3xl">🐶🐱</h1>
      </div>
      <div className="table overflow-x-auto px-4">
        <table {...getTableProps()} className="min-w-full bg-black text-white bg-opacity-50">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr key={useId()} {...headerGroup.getHeaderGroupProps()}>
                <th className="text-white text-xl">Pet Index</th>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 border-b-2 border-gray-300 text-left text-white text-lg"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row , index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td>{index+1}</td>
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 border-b border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {pageOptions.length > 1 && (
          <div className="pagination flex items-center justify-center mb-5">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="text-white text-5xl rounded mx-1">
              {'<<'}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="text-white text-5xl rounded mx-1">
              {'< next'}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="text-white text-5xl rounded mx-1">
              {'>'}
            </button>
            <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="text-white text-5xl rounded mx-1">
              {'>>'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedPets;
