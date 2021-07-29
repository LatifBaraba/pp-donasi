import React from 'react'
import { Card, CardTitle, Table } from "react-bootstrap";
const History = () => {

    return (
        <>
            <div className="container">
                <div className="card">
                    <div style={{ padding: '20px' }}>
                        <div className="form-group">
                            {/* <CardTitle> */}
                            <div className="row">
                                <div className="col-sm-12 text-left">
                                    <h4>Transactions History</h4>
                                </div>
                            </div>
                            {/* </CardTitle> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    // onChange={handleSearchChange}
                                    />
                                </div>
                            </div>
                          
                        </div>
                        <div className="table-responsive">
                            <div>
                                <table id="mytable" class="table table-bordred table-striped">

                                    <thead>

                                        <th><input type="checkbox" id="checkall" /></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Actions</th>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History