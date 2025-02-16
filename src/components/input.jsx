import React from 'react'

const Input = () => {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand logo" href="#">
                AGRO<span className="logo-ai">AI</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="content-wrapper">
        
        <div className="container">
            <form className="prediction-form">
                <h2 className="form-title">Crop Yield Prediction</h2>
                
                <div className="mb-3">
                    <label for="cropName" className="form-label">Enter crop name</label>
                    <input type="text" className="form-control" id="cropName" placeholder="cotton/wheat/rice"></input>
                </div>

                <div className="mb-3">
                    <label for="year" className="form-label">Year</label>
                    <input type="number" className="form-control" id="year" placeholder="2025" min="2000" max="2100"></input>
                </div>

                <div className="mb-3">
                    <label for="rainfall" className="form-label">Average Rainfall (mm)</label>
                    <input type="number" className="form-control" id="rainfall" placeholder="750" step="0.1"></input>
                </div>

                <div className="mb-3">
                    <label for="fertilizer" className="form-label">Fertilizer used</label>
                    <input type="text" className="form-control" id="fertilizer" placeholder="4.53kgs"></input>
                </div>

                <div className="mb-3">
                    <label for="pesticides" className="form-label">Pesticides used</label>
                    <input type="text" className="form-control" id="pesticides" placeholder="300ml"></input>
                </div>

                <div className="mb-3">
                    <label for="area" className="form-label">Area of field</label>
                    <input type="text" className="form-control" id="area" placeholder="1000 sq.feet"></input>
                </div>

                <button type="submit" className="predict-btn">
                    Predict
                </button>
            </form>
        </div>
    </div>


    <footer>
        <div className="container">
            <p className="mb-0">© 2025 AGRO AI - Empowering Agriculture with Intelligence</p>
        </div>
    </footer>
</>

  )
}

export default Input