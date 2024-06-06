import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import useAuth from "../Hooks/useAuth";

const MyAddedPets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const { user } = useAuth();
  const userEmail = user.email;

  useEffect(() => {
    fetch('http://localhost:5000/pet')
      .then(res => res.json())
      .then(data => {
        const filteredData = data
          .filter(pet => pet.addemail === user.email)
          .map((pet, index) => ({ ...pet, index: index + 1 }));
        setPets(filteredData);
      });
  }, [userEmail]);

  const data = useMemo(() => pets, [pets]);

  const columns = useMemo(
    () => [
      {
        Header: "Pet Index",
        accessor: "index",
      },
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
    if (window.confirm("Are you sure you want to delete this pet?")) {
      console.log(`Pet with id ${id} deleted`);
      // Add your delete logic here, e.g., API call to delete the pet
    }
  };

  const toggleAdoptionStatus = (id) => {
    fetch(`http://localhost:5000/pet/adopt/${id}`, {
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
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
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
              <tr {...headerGroup.getHeaderGroupProps()}>
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
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
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
