import { useEffect, useState } from "react";
import { getUsers, toggleUser } from "../services/adminService";

function ManageUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggle = async (id) => {

        await toggleUser(id);

        loadUsers();
    };

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Manage Users</h2>

                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search user..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Phone</th>

                        <th>Location</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredUsers.map(user => (

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.fullName}</td>

                            <td>{user.email}</td>

                            <td>{user.role}</td>

                            <td>{user.phone}</td>

                            <td>{user.location}</td>

                            <td>

                                {user.active ? (

                                    <span className="badge bg-success">
                                        Active
                                    </span>

                                ) : (

                                    <span className="badge bg-danger">
                                        Inactive
                                    </span>

                                )}

                            </td>

                            <td>
                                {user.role === "ADMIN" ? (
                                  <span className="badge bg-secondary">
                                    Protected
                                  </span>
                                ) : (
                                  <button
                                    className={`btn btn-sm ${
                                      user.active ? "btn-danger" : "btn-success"
                                    }`}
                                    onClick={() => handleToggle(user.id)}
                                  >
                                    {user.active ? "Deactivate" : "Activate"}
                                  </button>
                                )}
                              </td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ManageUsers;