import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail, fetchDonationDetail } from '../Redux/detail/actions';

const Detail = (props) => {
    const url = window.location.href;
    const id_donation = url.trim();
    const _id = id_donation.split("/")[4];
    console.log(props.value)
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const dispatch = useDispatch()
    const stateDetail = useSelector((state) => state.detailReducer.detail)

    console.log(stateDetail, 'detail')
    useEffect(() => {
        dispatch(fetchDetail(token, _id))
    }, [token, _id])

    useEffect(() => {
        if (stateDetail.is_rutin === true) {
            fetchDonationDetail(stateDetail.id_pp_cp_program_donasi_rutin)
        }
    },[stateDetail])

    const convertToRupiah = (angka) => {
        if (angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }

    }

    const date = new Date(stateDetail.paid_at)
    const time = date.toLocaleDateString("en-US")
    const [colour, setColour] = useState("")

    useEffect(() => {
        if (stateDetail.status === 'Unpaid') {
            setColour('warning')
        } if (stateDetail.status === 'Cancel') {
            setColour('info')
        } if (stateDetail.status === 'Paid') {
            setColour('success')
        }
    }, [stateDetail])

    return (
        <>

            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h4>Transactions History</h4>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                {/* <div className="card"> */}
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                {/* <th>#NO</th> */}
                                <th>USER</th>
                                <th>DONATION ID</th>
                                <th>TYPE</th>
                                <th>CATEGORY</th>
                                <th>TITLE</th>
                                <th>AMOUNT</th>
                                <th>DATE</th>
                                <th>TRANSACTION IMAGE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>
                        {props.idx + 1}
                    </td> */}
                                <td>
                                    <div><strong>username: </strong>{[stateDetail.username]}</div>
                                    <div><strong>email: </strong>{stateDetail.email}</div>
                                    <div><strong>phone: </strong>{stateDetail.phone}</div>
                                </td>
                                <td>{stateDetail.id}</td>
                                <td>{stateDetail.is_rutin !== true ? "One Time" : "Rutin"}</td>
                                <td>iuu</td>
                                <td>{stateDetail.donasi_title}</td>
                                <td>{convertToRupiah(stateDetail.amount)}</td>
                                <td>{time}</td>
                                <td>
                                    <div>
                                        <img src={stateDetail.image_payment_url} style={{ width: '100%' }} />
                                    </div>
                                </td>
                                <td><badge className={`badge badge-${colour}`}>{stateDetail.status}<i className="fa fa-trash"></i></badge></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Detail