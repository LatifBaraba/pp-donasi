// import { Button } from "bootstrap"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";

const HistoryList = (props) => {
    const [colour, setColour] = useState("")
    useEffect(() => {
        if (props.status === 'Unpaid') {
            setColour('danger')
        } if (props.status === 'Cancel') {
            setColour('info')
        } if (props.status === 'Paid') {
            setColour('success')
        }
    }, [props.status])

    return (
        <tr>
            <td>
                {props.idx +1}
            </td>
            <td>
                <div><strong>username:</strong>{[props.username]}</div>
                <div><strong>email:</strong>{props.email}</div>
                <div><strong>phone:</strong>{props.phone}</div>
            </td>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td><badge className={`badge badge-${colour}`}>{props.status}</badge></td>
            <td>
                <div><Button size="sm"><i className="fa fa-trash"></i>Detail</Button></div></td>

        </tr>
    )
}

export default HistoryList