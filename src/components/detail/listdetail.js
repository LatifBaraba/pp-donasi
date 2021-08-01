// import { Button } from "bootstrap"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { fetchDetail } from "../../Redux/detail/actions";

const DetailList = (props) => {
    console.log(props, "ini props")
  
    const convertToRupiah = (angka) => {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    const date = new Date(props.data.date)
    const time = date.toLocaleDateString("en-US")
    const [colour, setColour] = useState("")

    useEffect(() => {
        if (props.data.status === 'Unpaid') {
            setColour('warning')
        } if (props.data.status === 'Cancel') {
            setColour('info')
        } if (props.data.status === 'Paid') {
            setColour('success')
        }
    }, [props.data.status])

    return (
        <>
            <tr>
                <td>
                    {props.idx + 1}
                </td>
                <td>
                    <div><strong>username:</strong>{[props.data.username]}</div>
                    <div><strong>email:</strong>{props.data.email}</div>
                    <div><strong>phone:</strong>{props.dataphone}</div>
                </td>
                <td>{props.data.id}</td>
                <td>{props.data.title}</td>
                <td>{convertToRupiah(props.data.amount)}</td>
                <td>{time}</td>
                <td><badge className={`badge badge-${colour}`}>{props.data.status}<i className="fa fa-trash"></i></badge></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
           
        </>
    )
}

export default DetailList