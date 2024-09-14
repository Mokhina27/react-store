import { FC, useState } from "react"
import FormLayout from "../layouts/FormLayout"
import { useForm } from "react-hook-form"
import CustomInput from "../components/UI/CustomInput"
import CustomBtn from "../components/UI/CustomBtn"
import { Link, useNavigate } from "react-router-dom"
import { IRegister } from "../types"
import { registerUser } from "../services/auth"
import { errorMessage } from "../utils/error"


const Register:FC = () => {

  const { mutateAsync } = registerUser()
  const navigate = useNavigate()

  const [errorText, setErrorText] = useState('')

  const { 
    register, 
    handleSubmit, 
    watch,
    formState: {
      errors,
      isValid
    } } = useForm<IRegister>({
      mode: 'onBlur'
    })

  const password = watch('password')

  const submit = async(data:IRegister) => {
    try {
      await mutateAsync(data)
      setErrorText('')
      navigate('/login')
    } catch (error) {
      setErrorText(errorMessage(error))
      console.log(error);
    }
  }

  return (
    <>
      <FormLayout>
        <div className="formlayout__block">
          <div className="formlayout__block-title">Sign up</div>
          <form onSubmit={handleSubmit(submit)} className="formlayout__block-form">
            <CustomInput
              type="text"
              placeholder="Name"
              errors={errors?.username}
              register={register('username', {
                required: 'Required',
                minLength: {
                  value: 5,
                  message: 'Enter at least 5 characters'
                }
              })}
            />
            <CustomInput
              type="email"
              placeholder="Email"
              errors={errors?.email}
              register={register('email', {
                required: 'Required',
              })}
            />
            <CustomInput
              type="password"
              placeholder="Password"
              errors={errors.password}
              register={register('password', {
                required: 'Required',
                minLength: {
                  value: 8,
                  message: 'Enter at least 8 characters'
                }
              })}
            />
            <CustomInput
              type="password"
              placeholder="Confirm your password"
              errors={errors.password2}
              register={register('password2', {
                required: 'Required',
                validate:(value) => value == password || 'Passwords do not match',
                minLength: {
                  value: 8,
                  message: 'Enter at least 8 characters'
                }
              })}
            />
            <CustomBtn
              text="Sign Up"
              width={360}
              height={48}
              mauto="auto"
              disabled={!isValid}
            />
          </form>
          <div className="formlayout__block-info">
            { errorText && <p className="formlayout__block-error">{errorText}</p> }
            <p className="formlayout__block-text">Already have an account?</p>
            <Link to="/login" className="formlayout__block-link">Sign in</Link>
          </div>
        </div>
      </FormLayout>
    </>
  )
}

export default Register