import { ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ErrorMessages } from './Messages'

export const addContactsValidation = Yup.object(
    {
     name: Yup.string().required(ErrorMessage.nameIsRequired).min(2).max(12),
     number:Yup.number().required(ErrorMessages.phonenoIsRequired)
}
) 