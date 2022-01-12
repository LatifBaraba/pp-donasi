import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form";  
import { fetchFundraiser } from "../../Redux/fundraiser/action";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";

const Editfundraiser = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  let _contentState = EditorState.createEmpty("");
  const [editorState, setEditorState] = useState(_contentState);
  const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));


  let token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  useEffect(() => {
    dispatch(fetchFundraiser(token, username));
  }, [token, username]);

  const datafund = useSelector((state) => state.fundraiserReducer.fundraiser);

  const newContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const data = props.location.state.data;

  const onSubmit = () => {
    console.log(newContent);
  };

  return (
    <div>
      <div className="container detail-program">
        <div className="content">
          <div className="container list-program">
            <center>
              <div className="col-md-12">
                <div className="article-detail">
                  <b>
                    <h4>Galang Dana Saya</h4>
                  </b>
                  <br />
                  <div className="col-md-12 mb-3">
                    <b>
                      <h3>{data.title}</h3>
                    </b>
                    <hr />
                    <form
                      className="needs-validation"
                      noValidate=""
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                      />
                      <button
                        className="btn btn-pill btn-primary btn-block mt-3 mb-3"
                        type="submit"
                      >
                        {"Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editfundraiser;
