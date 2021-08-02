// import { Button } from "bootstrap"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";

const HistoryList = (props) => {
    const convertToRupiah = (angka) => {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    const date = new Date(props.date)
    const time = date.toLocaleDateString("en-US")
    const [colour, setColour] = useState("")
    useEffect(() => {
        if (props.status === 'Unpaid') {
            setColour('warning')
        } if (props.status === 'Cancel') {
            setColour('info')
        } if (props.status === 'Paid') {
            setColour('success')
        }
    }, [props.status])

    return (
        <>
            <tr>
                <td>
                    {props.idx + 1}
                </td>
                <td>
                    <div><strong>username:</strong>{[props.username]}</div>
                    <div><strong>email:</strong>{props.email}</div>
                    <div><strong>phone:</strong>{props.phone}</div>
                </td>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{convertToRupiah(props.amount)}</td>
                <td>{time}</td>
                <td><badge className={`badge badge-${colour}`}>{props.status}<i className="fa fa-trash"></i></badge></td>
                <td>
                    <Link to={`/detail/${props.id}`}>
                        <div><Button size="sm" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.idx}`}>Detail</Button></div>
                    </Link>
                    {props.status === "Unpaid" ? (
                        <Link to="/confirm">
                            <div className="mt-1">
                                <Button size="sm" variant="warning">Confirm</Button>
                            </div>
                        </Link>
                    ) : ""}
                </td>
            </tr>
            <div class="modal fade" id={`exampleModal${props.idx}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
      </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryList