import React, { Component } from "react";

class AnsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: []
    };
  }
  render() {
    const { title, body } = this.props.question;
    return (
      <div
        className="modal fade"
        id="ansModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ansModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header align-items-center py-2 bg-light">
              {this.props.question.owner && (
                <img
                  className="img-thumbnail mr-2"
                  style={{ width: "50px" }}
                  src={this.props.question.owner.profile_image}
                  alt={this.props.question.owner.display_name}
                  title={this.props.question.owner.display_name}
                />
              )}
              <h6
                className="modal-title"
                id="ansModalLabel"
                dangerouslySetInnerHTML={{
                  __html: title
                }}
              ></h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="answer-body modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-2  my-auto">
                    <button type="button" class="btn btn-primary align-middle">
                    Score: <span class="badge badge-light">{this.props.question.score}</span>
                    <span class="sr-only">Score: </span>
                    </button>
                  </div>
                  <div className="col-10">
                  <p className="border-bottom font-weight-bold pb-2 mb-0">
                  Question Detail
                  </p>
                  <div
                    className="bg-light p-3 mb-2"
                    dangerouslySetInnerHTML={{ __html: body }}>
                  </div>

                  </div>
                </div>
              </div>


              <br />
              {/* Answer Display */}
              {this.props.question.answers ? (
                this.props.question.answers.map((ans, i) => {
                  return (
                    <div key={ans.answer_id} className="mb-4">
                      <h5 className="text-success font-weight-bold pb-2 mb-0 border-bottom">
                        {ans.is_accepted && (
                          <i className="fas fa-check-double"></i>
                        )}{" "}
                        Answer {i + 1}
                      </h5>
                      <div
                        className="bg-light p-3"
                        dangerouslySetInnerHTML={{ __html: ans.body }}
                      ></div>
                    </div>
                  );
                })
              ) : (
                <h5 className="text-danger">There is no Answer</h5>
              )}
            </div>
            <div className="modal-footer py-1 bg-light">
            <a className="btn btn-primary" 
            href={this.props.question.link} 
            target="_blank" >View Question in StackOverflow</a>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnsModal;
