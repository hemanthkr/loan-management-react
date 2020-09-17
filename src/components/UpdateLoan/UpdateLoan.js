import React, { useState } from 'react';

const UpdateLoan = () => {

    const [loan, setLoan] = useState({
        borrowerName: '',
        loanType: '',
        loanTerm: '',
        loanAmount: '',
        property: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipCode: '',
            legalDocument: ''
        }
    });

    return (
        <div>
            <h2 className="text-center">Add Loan</h2>
            <form>
                <div className="form-group">
                    <label>Borrower Name:</label>
                    <input type="text" placeholder="borrowerName" name="borrowerName" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Loan Type:</label>
                    <input type="text" placeholder="loanType" name="loanType" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Loan Term:</label>
                    <input type="text" placeholder="loanTerm" name="loanTerm" className="form-control" required />
                </div>

                <div className="form-group">
                    <label>Loan Amount:</label>
                    <input type="text" placeholder="loanAmount" name="loanAmount" className="form-control" />
                </div>

                <div className="form-group">
                    <label>AddressLine1:</label>
                    <input type="text" placeholder="addressLine1" name="addressLine1" className="form-control" />
                </div>

                <div className="form-group">
                    <label>AddressLine2:</label>
                    <input type="text" placeholder="addressLine2" name="addressLine2" className="form-control" />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" placeholder="city" name="city" className="form-control" />
                </div>
                <div className="form-group">
                    <label>ZipCode:</label>
                    <input type="text" placeholder="zipCode" name="zipCode" className="form-control" />
                </div>

                <div className="form-group">
                    <label>LegalDocument:</label>
                    <input type="text" placeholder="legalDocument" name="legalDocument" className="form-control" />
                </div>
                <button className="btn btn-success">Save</button>
            </form>
        </div>
    )
}

export default UpdateLoan;


