import React, { useEffect } from 'react'
import { Badge, Card, CardTitle, Table } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHistory } from '../Redux/history/action'
import HistoryList from '../components/history/historylist';
const History = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const dispatch = useDispatch()
    const stateHistory = useSelector((state) => state.historyReducer.history)

    console.log(stateHistory, 'history')

    useEffect(() => {
        dispatch(fetchHistory(token, username))
    }, [token, username])

    const ListHistory = stateHistory.map((item, idx) => {
        return (
            <HistoryList
                idx={idx}
                username={item.username}
                email={item.email}
                phone={item.phone}
                id={item.id}
                title={item.donasi_title}
                amount={item.amount}
                date={item.created_at}
                status={item.status}
            />
        )
    })
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
                                        <th>#NO</th>
                                        <th>USER</th>
                                        <th>DONATION ID</th>
                                        <th>TITLE</th>
                                        <th>AMOUNT</th>
                                        <th>DATE</th>
                                        <th>STATUS</th>
                                        <th>ACTIONS</th>
                                    </thead>
                                    <tbody style={{ color: 'grey' }}>
                                        {ListHistory}
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