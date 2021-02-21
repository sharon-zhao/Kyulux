import React from 'react'
import Alert from 'react-bootstrap/Alert'

export const AlertDismissable = ({ message, variant }) => (
  <Alert variant={variant}>
    <Alert.Heading>Alert!</Alert.Heading>
    <p>
      {message}
    </p>
  </Alert>
)
