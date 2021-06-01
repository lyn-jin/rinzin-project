import React from "react";

function LForm() {
  return (
    <div className="container home-container">
      <div className="card p-5 my-5">
        <div className="text-center card-header">
          <h2>Leave Application Form</h2>
        </div>
        <div className="card-body">
          <form className="">
            <div className="row my-3 py-3">
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" className="col-md-4 col-form-label">
                    Employee Name:
                  </label>
                  <div className="col-md-8">
                    <input class="form-control" type="text" value="" id="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" class="col-md-4 col-form-label">
                    Date:
                  </label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="date"
                      value="2011-08-19"
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" className="col-md-4 col-form-label">
                    Department:
                  </label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="text"
                      value=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" className="col-md-4 col-form-label">
                    Supervisor:
                  </label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="text"
                      value=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row Reason-div my-3 py-3">
              <div className="col-md-12">
                <h3 className="py-3 mb-4">Reasons for Leave</h3>
              </div>
              <div className="col-md-12">
                <div className="form-check form-check-inline col-md-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Vacation
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    Civil Leave
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label className="form-check-label" for="inlineCheckbox3">
                    Military{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox4"
                    value="option4"
                  />
                  <label className="form-check-label" for="inlineCheckbox4">
                    Sick - Self
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox5"
                    value="option5"
                  />
                  <label className="form-check-label" for="inlineCheckbox5">
                    Sick - Family
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox6"
                    value="option6"
                  />
                  <label className="form-check-label" for="inlineCheckbox6">
                    Sick – Dr. Appointment{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox7"
                    value="option7"
                  />
                  <label className="form-check-label" for="inlineCheckbox7">
                    Worker’s Comp
                  </label>
                </div>
                <div className="form-check form-check-inline col-md-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox8"
                    value="option8"
                  />
                  <label className="form-check-label" for="inlineCheckbox8">
                    Leave of Absence
                  </label>
                </div>
              </div>
            </div>

            <div className="row date-request my-3 py-3">
              <div className="col-md-12">
                <h3 className="py-3 mb-4">Date Request</h3>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" class="col-md-4 col-form-label">
                    From Date:
                  </label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="date"
                      value="2011-08-19"
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label for="" class="col-md-4 col-form-label">
                    To Date:
                  </label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="date"
                      value="2011-08-19"
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="form-check">
                <input type="checkbox" class="form-check-input" id="checked1" />
                <label className="form-check-label" for="checked1">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..." "There is no one who
                  loves pain itself, who seeks after it and wants to have it,
                  simply because it is pain..."
                </label>
              </div>
              <button type="submit" class="btn btn-success">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LForm;
