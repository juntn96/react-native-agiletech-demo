import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const validate = values => {
    console.log('values: ', values)
    if (values.phone !== '1') {
        throw new SubmissionError({ phone: 'Số điện thoại không đúng', _error: 'Login failed!' })
    } else if (values.password !== '1') {
        throw new SubmissionError({ password: 'Mật khẩu không đúng', _error: 'Login failed!' })
    }
    // throw new SubmissionError({ password: 'Password invalidate', _error: 'Login failed!' })
}

export default validate