import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"

const Mailchimp = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)


  function errorHandling(data) {
      console.log(data)
      setErr(data.msg)
  }
  
  const handleSubmit = async () => {
    setLoading(true)
    await addToMailchimp(email).then((data) => {
      if (data.result == "error") {
        errorHandling(data)
        setLoading(false)

      } else {
        setSubmitted(true)
        setLoading(false)

      }
    })
  }

  const handleClose = () => {
    setSubmitted(false)
    setErr("")
  }

  return (
    <section className="uk-section uk-text-left mailchimp uk-light">
    <section className="uk-container">
    <h2 className="uk-margin-remove">Newsletter</h2>  
    {!err ? (
    <>
      {submitted ? (
          <div className="uk-padding">
            <p className="uk-text-lead">
              Successfully subscribed!
            </p>
            <p>
            Thank your for your interest in my content.
            </p>
            <button className="uk-button uk-button-primary" onClick={() => handleClose()}>Close</button>
          </div>
      ) : (
        <>
            <div className="uk-margin-small-bottom">
              <p className="uk-text-bold">
              Sign up to my mailing list for updates on products, services and new content.
              </p>
            </div>
          <div className="uk-margin-small-bottom">
            <input
              type="email"
              name="email"
              id="mail"
              className="uk-input uk-text-bold"
              label="email-input"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              className="uk-button uk-button-primary"
              aria-label="Subscribe"
              onClick={() => handleSubmit()}
            >
            {!loading ? ("Subscribe") : (<div data-uk-spinner></div>)}
            </button>
          </div>
        </>
      )}
      </>
    ) : (
          <div className="uk-padding">
            <p className="uk-text-lead">
              Error
            </p>
            <p dangerouslySetInnerHTML={{__html:err}}>
            </p>
            <button className="uk-button uk-button-primary" onClick={() => handleClose()}>Close</button>
          </div>
    ) }
    </section>
    </section>
  )
}

export default Mailchimp