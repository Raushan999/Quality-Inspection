import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = ({children, name, percentage, value}) => {
  
  return (
    <div className="col-xl-3 col-sm-6 col-12">
      <div className="card shadow border-0">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                {name}
              </span>
              <span className="h3 font-bold mb-0">{value}</span>
            </div>
            <div className="col-auto">
                {children}
            </div>
          </div>
          <div className="mt-2 mb-0 text-sm">
            {
                percentage[0] === '+'? <span className="badge badge-pill bg-soft-success text-success me-2">
                    <i className="bi bi-arrow-up me-1"></i>{percentage}
                    </span> : <span className="badge badge-pill bg-soft-danger text
                    text-danger me-2">
                        <i className="bi bi-arrow-down me-1"></i>{percentage}
                        </span>
            }
            <span className="text-nowrap text-xs text-muted">Since last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;