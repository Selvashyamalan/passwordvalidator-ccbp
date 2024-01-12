// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Description,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const isPassword = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {isPassword && (
          <ErrorMessage>
            Your password must be at least 8 characters{' '}
          </ErrorMessage>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
