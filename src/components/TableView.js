import React, { useState, useEffect } from 'react';
import './TableView.css';

const TableView = () => {
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = () => {
      const dummyData = [
        { name: 'Rahul kharola', mobile: '6398128811', email: 'rahul.kharola111@gmail.com', gender: 'Male' },
        { name: 'Diya Shah', mobile: '9876543210', email: 'diya@gmail.com', gender: 'Female' },
        { name: 'Aryan Gupta', mobile: '4567890123', email: 'aryan@gmail.com', gender: 'Male' },
        { name: 'Ishaan Singh', mobile: '0123456789', email: 'ishaan@gmail.com', gender: 'Male' },
        { name: 'Aishwarya Reddy', mobile: '5678901234', email: 'aishwarya@gmail.com', gender: 'Female' },
        { name: 'Advaita Verma', mobile: '8901234567', email: 'advaita@gmail.com', gender: 'Female' },
        { name: 'Vivaan Kapoor', mobile: '2345678901', email: 'vivaan@gmail.com', gender: 'Male' },
        { name: 'Amrita Singhania', mobile: '9012345678', email: 'amrita@gmail.com', gender: 'Female' },
        { name: 'Arjun Joshi', mobile: '3456789012', email: 'arjun@gmail.com', gender: 'Male' },
        { name: 'Shreya Desai', mobile: '7890123456', email: 'shreya@gmail.com', gender: 'Female' },
        { name: 'Yuvraj Mehta', mobile: '6789012345', email: 'yuvraj@gmail.com', gender: 'Male' },
        { name: 'Ananya Sharma', mobile: '0123456789', email: 'ananya@gmail.com', gender: 'Female' },
        { name: 'Dhruv Bhatia', mobile: '7890123456', email: 'dhruv@gmail.com', gender: 'Male' },
        { name: 'Riya Khanna', mobile: '5678901234', email: 'riya@gmail.com', gender: 'Female' },
        { name: 'Shaurya Kapoor', mobile: '9012345678', email: 'shaurya@gmail.com', gender: 'Male' },
        { name: 'Myra Choudhary', mobile: '3456789012', email: 'myra@gmail.com', gender: 'Female' },
      ];

      setData(dummyData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [data, searchText]);

  const handleSearch = () => {
    // Triggered when search button is clicked
    // You can access searchText state for filtering the data
  };

  const handleSort = () => {
    // Triggered when the Name column header is clicked
    // You can access sortOrder state for determining the sorting order

    const sortedData = [...filteredData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-view-container">
      <h2>Table View Data</h2>
      <div className="search-container">
        <label>Search:</label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th onClick={handleSort}>Full Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active-page' : ''}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TableView;
