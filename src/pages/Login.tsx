import { FC, useState } from "react"
import FormLayout from "../layouts/FormLayout"
import { useForm } from "react-hook-form"
import CustomInput from "../components/UI/CustomInput"
import CustomBtn from "../components/UI/CustomBtn"
import { Link, useNavigate } from "react-router-dom"
import { ILogin } from "../types"
import { loginUser } from "../services/auth"
import { errorMessage } from "../utils/error"


const Login:FC= () => {

  const { mutateAsync } = loginUser
  const [errorText, setErrorText] = useState('')
  const navigate = useNavigate()

  const { 
    register, 
    handleSubmit, 
    formState: {
      errors,
      isValid
    } } = useForm<ILogin>({
      mode: 'onBlur'
    })

  const submit = async(data:ILogin) => {
    try {
      await mutateAsync(data)
      setErrorText('')
      navigate('/')
    } catch (error) {
      setErrorText(errorMessage(error))
    }
    
  }

  return (
    <>
      <FormLayout>
        <div className="formlayout__block">
          <div className="formlayout__block-title">Nice to see you again!</div>
          <form onSubmit={handleSubmit(submit)} className="formlayout__block-form">
            <CustomInput
              type="text"
              placeholder="Login or email"
              errors={errors.username}
              register={register('username', {
                required: 'Required',
                minLength: {
                  value: 5,
                  message: 'Enter at least 5 characters'
                }
              })}
            />
            <CustomInput
              type="password"
              placeholder="Password"
              errors={errors?.password}
              register={register('password', {
                required: 'Required',
                minLength: {
                  value: 8,
                  message: 'Enter at least 8 characters'
                }
              })}
            />
            <CustomBtn
              text="Sign in"
              width={360}
              height={48}
              mauto="auto"
              disabled={!isValid}
            />
          </form>
          <div className="formlayout__block-info">
          { errorText && <p className="formlayout__block-error">{errorText}</p> }
          <p className="formlayout__block-text">Don't have an account?</p>
          <Link to="/register" className="formlayout__block-link">Sign up</Link>
          </div>
        </div>
      </FormLayout>
    </>
  )
}

export default Login