import React from "react"

const GeneralTerms = props => (
  <div>
    {/* -----WEB VERSION----- */}

    <div className="p-0 md:p-4 hidden lg:inline">
      <table>
        <tbody>
          <tr>
            <th className="bg-primary text-center text-white">
              Skills Fund Loan
            </th>
            <th
              className="bg-primary text-center text-white"
              colSpan={props.multipleLoanLengths ? undefined : "2"}
            >
              36 Month
            </th>
            {props.multipleLoanLengths && (
              <th className="bg-primary text-center text-white">60 Month</th>
            )}
          </tr>
          <tr>
            <td className="text-center">Cosigners</td>
            <td className="text-center" colSpan="2">
              Up to one cosigner allowed and, in some cases, required.
            </td>
          </tr>
          <tr>
            <td className="text-center bg-gray-100">Origination Fee</td>
            <td className="text-center bg-gray-100" colSpan="2">
              5.0% of loan requested
            </td>
          </tr>
          <tr>
            <td className="text-center">Interest Rate</td>
            <td
              className="text-center"
              colSpan={props.multipleLoanLengths ? undefined : "2"}
            >
              {/* Fixed */}
              <br /> {props.interestRate36} interest rate
              {props.interestOnly && " - Interest Only"}
              {props.immediateRepayment && " - Immediate Repayment"}
              {props.interestOnly && (
                <>
                  <br /> {props.deferred36} interest rate - Deferred
                </>
              )}
              <br /> {props.APRRange36} estimated APR
            </td>
            {props.multipleLoanLengths && (
              <td className="text-center">
                {/* Fixed */}
                <br /> {props.interestRate60} interest rate
                {props.interestOnly && " - Interest Only"}
                {props.immediateRepayment && " - Immediate Repayment"}
                {props.interestOnly && (
                  <>
                    <br /> {props.deferred60} interest rate - Deferred
                  </>
                )}
                <br /> {props.APRRange60} estimated APR
              </td>
            )}
          </tr>
          <tr>
            <td className="text-center bg-gray-100">
              Capitalization of Interest
            </td>
            <td className="text-center bg-gray-100" colSpan="2">
              {props.interestOnly && (
                <>
                  <p className="mb-1">
                    <strong>Interest-Only Loans:</strong> Interest not
                    capitalized unless payments not made.
                  </p>
                  <p className="mb-1">
                    <strong>Deferred Repayment Loan:</strong> Interest
                    capitalizes during program and grace period.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <span>
                  <strong>Immediate Repayment Loans:</strong> Interest not
                  capitalized unless payments not made.
                </span>
              )}{" "}
            </td>
          </tr>
          <tr>
            <td className="text-center">Payments Required While Enrolled?</td>
            <td className="text-center" colSpan="2">
              {props.interestOnly && (
                <>
                  <p className="mb-1">
                    <strong>Interest-Only Loans:</strong> Monthly interest
                    payments are required.
                  </p>
                  <p className="mb-1">
                    <strong>Deferred Repayment Loan:</strong> No monthly
                    payments are required.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <span>
                  <strong>Immediate Repayment Loans:</strong> Yes, full payments
                  (interest + principal) are mandatory roughly one month after
                  loan is disbursed.
                </span>
              )}{" "}
            </td>
          </tr>
          <tr>
            <td className="text-center bg-gray-100">Grace Period</td>
            <td className="text-center bg-gray-100" colSpan="2">
              <p>
                Three-month period after the in-school period, following
                official program completion, and before interest and principal
                repayment begins.
              </p>
              {props.interestOnly && (
                <>
                  <p className="mb-1">
                    <strong>Interest-Only Loans:</strong> Interest-only payments
                    are required while in school and in the grace period.
                  </p>
                  <p className="mb-1">
                    <strong>Deferred Repayment Loan:</strong> No payments are
                    required while in school and in the grace period.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <span>
                  <strong>Immediate Repayment Loans:</strong> None, full
                  repayments start roughly one month after loan is disbursed.
                </span>
              )}{" "}
            </td>
          </tr>
          <tr>
            <td className="text-center">Post-Grace Period</td>
            <td className="text-center" colSpan="2">
              {props.interestOnly && (
                <>
                  <p className="mb-1">
                    <strong>Interest-Only Loans:</strong> Full repayments
                    (principal and interest) are required.
                  </p>
                  <p className="mb-1">
                    <strong>Deferred Repayment Loan:</strong> Full repayments
                    (principal and interest) are required.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <span>
                  <strong>Immediate Repayment Loans:</strong> Full repayments
                  (principal and interest) are required.
                </span>
              )}{" "}
            </td>
          </tr>
          <tr>
            <td className="text-center bg-gray-100">
              Principal and Interest Repayment Term
            </td>
            <td
              className="text-center bg-gray-100"
              colSpan={props.multipleLoanLengths ? undefined : "2"}
            >
              36 months (3 years)
            </td>
            {props.multipleLoanLengths && (
              <td className="text-center bg-gray-100">60 months (5 years)</td>
            )}
          </tr>
        </tbody>
      </table>
    </div>

    {/* -----MOBILE VERSION----- */}

    <div className="p-0 md:p-4 lg:hidden">
      <table>
        <tbody>
          <tr>
            <th className="bg-primary text-center text-white">
              Skills Fund Loan - 36 Months
            </th>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">Cosigners</td>
          </tr>
          <tr>
            <td className="text-center">
              Up to one cosigner allowed and, in some cases, required.
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100 bg-gray-100">
              Origination Fee
            </td>
          </tr>
          <tr>
            <td className="text-center">5.0% of loan requested</td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">Interest Rate</td>
          </tr>
          <tr>
            <td className="text-center">
              {/* Fixed */}
              <br /> {props.interestRate36}
              {props.interestOnly && " - Interest Only"}
              {props.immediateRepayment && " and Immediate Repayment"}
              {props.interestOnly && (
                <>
                  <br /> {props.deferred36} - Deferred
                </>
              )}
              <br /> {props.APRRange36} estimated APR
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">
              Capitalization of Interest
            </td>
          </tr>
          <tr>
            <td className="text-center">
              {props.interestOnly && (
                <>
                  <p>
                    <strong>Interest-Only Loans:</strong> Interest not
                    capitalized unless payments not made.
                  </p>
                  <p>
                    <strong>Deferred Repayment Loan:</strong> Interest
                    capitalizes during program and grace period.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <p>
                  <strong>Immediate Repayment Loans:</strong> Interest not
                  capitalized unless payments not made.
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">
              Payments Required While Enrolled?
            </td>
          </tr>
          <tr>
            <td className="text-center">
              {props.interestOnly && (
                <>
                  <p>
                    <strong>Interest-Only Loans:</strong> Monthly interest
                    payments are required.
                  </p>
                  <p>
                    <strong>Deferred Repayment Loan:</strong> No monthly
                    payments are required.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <p>
                  <strong>Immediate Repayment Loans:</strong> Yes, full payments
                  (interest + principal) are mandatory roughly one month after
                  loan is disbursed.
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">Grace Period</td>
          </tr>
          <tr>
            <td className="text-center">
              <p>
                Three-month period after the in-school period, following
                official program completion, and before interest and principal
                repayment begins.
              </p>
              {props.interestOnly && (
                <>
                  <p>
                    <strong>Interest-Only Loans:</strong> Interest-only payments
                    are required while in school and in the grace period.
                  </p>
                  <p>
                    <strong>Deferred Repayment Loan:</strong> No payments are
                    required while in school and in the grace period.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <p>
                  <strong>Immediate Repayment Loans:</strong> None, full
                  repayments start roughly one month after loan is disbursed.
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">
              Post-Grace Period
            </td>
          </tr>
          <tr>
            <td className="text-center">
              {props.interestOnly && (
                <>
                  <p>
                    <strong>Interest-Only Loans:</strong> Full repayments
                    (principal and interest) are required.
                  </p>
                  <p>
                    <strong>Deferred Repayment Loan:</strong> Full repayments
                    (principal and interest) are required.
                  </p>
                </>
              )}
              {props.immediateRepayment && (
                <p>
                  <strong>Immediate Repayment Loans:</strong> Full repayments
                  (principal and interest) are required.
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold bg-gray-100">
              Principal and Interest Repayment Term
            </td>
          </tr>
          <tr>
            <td className="text-center ">36 months (3 years)</td>
          </tr>
          {props.multipleLoanLengths && (
            <>
              <tr>
                <th className="bg-primary text-center text-white">
                  Skills Fund Loan - 60 Months
                </th>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">Cosigners</td>
              </tr>
              <tr>
                <td className="text-center">
                  Up to one cosigner allowed and, in some cases, required.
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Origination Fee
                </td>
              </tr>
              <tr>
                <td className="text-center">5.0% of loan requested</td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Interest Rate
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  {/* Fixed */}
                  <br /> {props.interestRate60} interest rate
                  {props.interestOnly && " - Interest Only"}
                  {props.immediateRepayment && " and Immediate Repayment"}
                  {props.interestOnly && (
                    <>
                      <br /> {props.deferred60} interest rate - Deferred
                    </>
                  )}
                  <br /> {props.APRRange60} estimated APR
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Capitalization of Interest
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  {props.interestOnly && (
                    <>
                      <p>
                        <strong>Interest-Only Loans:</strong> Interest not
                        capitalized unless payments not made.
                      </p>
                      <p>
                        <strong>Deferred Repayment Loan:</strong> Interest
                        capitalizes during program and grace period.
                      </p>
                    </>
                  )}
                  {props.immediateRepayment && (
                    <p>
                      <strong>Immediate Repayment Loans:</strong> Interest not
                      capitalized unless payments not made.
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Payments Required While Enrolled?
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  {props.interestOnly && (
                    <>
                      <p>
                        <strong>Interest-Only Loans:</strong> Monthly interest
                        payments are required.
                      </p>
                      <p>
                        <strong>Deferred Repayment Loan:</strong> No monthly
                        payments are required.
                      </p>
                    </>
                  )}
                  {props.immediateRepayment && (
                    <p>
                      <strong>Immediate Repayment Loans:</strong> Yes, full
                      payments (interest + principal) are mandatory roughly one
                      month after loan is disbursed.
                    </p>
                  )}
                </td>{" "}
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Grace Period
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <p>
                    Three-month period after the in-school period, following
                    official program completion, and before interest and
                    principal repayment begins.
                  </p>
                  {props.interestOnly && (
                    <>
                      <p>
                        <strong>Interest-Only Loans:</strong> Interest-only
                        payments are required while in school and in the grace
                        period.
                      </p>
                      <p>
                        <strong>Deferred Repayment Loan:</strong> No payments
                        are required while in school and in the grace period.
                      </p>
                    </>
                  )}
                  {props.immediateRepayment && (
                    <p>
                      <strong>Immediate Repayment Loans:</strong> None, full
                      repayments start roughly one month after loan is
                      disbursed.
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Post-Grace Period
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  {props.interestOnly && (
                    <>
                      <p>
                        <strong>Interest-Only Loans:</strong> Full repayments
                        (principal and interest) are required.
                      </p>
                      <p>
                        <strong>Deferred Repayment Loan:</strong> Full
                        repayments (principal and interest) are required.
                      </p>
                    </>
                  )}
                  {props.immediateRepayment && (
                    <p>
                      <strong>Immediate Repayment Loans:</strong> Full
                      repayments (principal and interest) are required.
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-center font-bold bg-gray-100">
                  Principal and Interest Repayment Term
                </td>
              </tr>
              <tr>
                <td className="text-center">60 months (5 years)</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  </div>
)

export default GeneralTerms
