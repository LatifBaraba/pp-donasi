import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from '../Redux/detail/actions';
import './detai.css'

const Detail = () => {
    const url = window.location.href;
    const id_donation = url.trim();
    const _id = id_donation.split("/")[4];

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const dispatch = useDispatch()
    const stateDetail = useSelector((state) => state.detailReducer.detail)
    const stateKategori = useSelector((state) => state.detailReducer.detaildonation)

    useEffect(() => {
        dispatch(fetchDetail(token, _id))
    }, [token, _id])

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
                <div class="container-inv-invoice">
                    <div class="background-img-lunas-invoice'; ?>"></div>
                    <div classNameName="col-sm-12 text-center" >
                        <h3>Transactions Detail</h3>
                        <hr></hr>
                    </div>
                    <div class="header-inv">
                        <div class="row label-order-row">

                            <table class="table table-striped" style={{ lineHeight: '10px' }}>
                                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                                    <strong>User</strong>
                                </div>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>{stateDetail.nama_lengkap}</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>:</td>
                                    <td>{stateDetail.username}</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>:</td>
                                    <td>{stateDetail.email}</td>
                                </tr>
                                <tr>
                                    <td>phone</td>
                                    <td>:</td>
                                    <td>{stateDetail.phone}</td>
                                </tr>
                                <div className="col-sm-12" style={{ marginTop: '30px', marginBottom: '10px' }}>
                                    <strong>Detail</strong>
                                </div>
                                <tr>
                                    <td>Type</td>
                                    <td>:</td>
                                    <td>{stateDetail.is_rutin !== true ? "One Time" : "Rutin"}</td>
                                </tr>


                                <tr>
                                    <td>Title</td>
                                    <td>:</td>
                                    <td>{stateDetail.donasi_title}</td>
                                </tr>
                                <tr>
                                    <td>Payment_Methode</td>
                                    <td>:</td>
                                    <td>{stateDetail.payment_method}</td>
                                </tr>
                         
                                {stateDetail.is_rutin === true ? (
                                    <>
                                        <tr>
                                            <td>Category</td>
                                            <td>:</td>
                                            <td>{stateKategori.kategori_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Benefit</td>
                                            <td>:</td>
                                            <td>{stateKategori.benefit}</td>
                                        </tr>
                                        <tr>
                                            <td>Paket DOnasi</td>
                                            <td>:</td>
                                            <td>{stateKategori.title}</td>
                                        </tr>
                                    </>
                                ) : null}

                                <tr>
                                    <td>Amount</td>
                                    <td>:</td>
                                    <td>{convertToRupiah(stateDetail.amount)}</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>:</td>
                                    <td>{time}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>:</td>
                                    <td>
                                        <badge classNameName={`badge badge-${colour}`}>{stateDetail.status}</badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Payment Image</td>
                                    <td>:</td>
                                    <td>
                                        <div>
                                            <img src={stateDetail.image_payment_url} style={{ width: '50%' }} />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Detail