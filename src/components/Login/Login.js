import React from "react";
import "./Login.scss";
import img from "../../logo.svg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-logo" ><img className="image-logo col-12 d-sm-none" src={img}/></div>
          <div className="content-left col-sm-7 d-none d-sm-flex pb-3">
            <div className="brand">DuyDo</div>
            <div className="detail">
              DuyDo giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-2 py-3">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Email and phone" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <span className="text-center"><a href="#" className="forgot-password">forgot your password ?</a></span>
            <hr />
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Create your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
