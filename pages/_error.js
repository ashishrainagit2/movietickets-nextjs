import React from 'react'
import Layout from '../components/layout'

function Error({ statusCode }) {
  return (
      <Layout>
    <div className="errorWrapper">
        <div className="imageHolder">
            <img src="../../error.png" />
        </div>
        
        <p className="messageWrapper">
            {statusCode
            ? `An error ${statusCode} occurred on server `
            : 'An error occurred on client'}
        </p>
    <style jsx>{`
        .errorWrapper{
            color: white;
        }
        .imageHolder {
            width: 90%;
            text-align: center;
            margin: 10px auto;
        }
        .messageWrapper{
            width: 90%;
            text-align: center;
            margin: 10px auto;
            padding: 10px;
            margin: 10px;
        }
    `}
    </style>
    </div>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error