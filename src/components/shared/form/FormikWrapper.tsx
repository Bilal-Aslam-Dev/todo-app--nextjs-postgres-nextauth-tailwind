import type { FC, ReactNode } from 'react'

import { Formik, Form } from 'formik'

interface FormTypes {
  initialValues: Record<string, any>
  validationSchema: Record<string, any>
  children: ReactNode
  onSubmit: (values: any, { resetForm }: { resetForm?: () => void }) => any
}

const FormikWrapper: FC<FormTypes> = ({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>{children}</Form>
    </Formik>
  )
}

export default FormikWrapper
