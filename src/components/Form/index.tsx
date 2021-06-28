import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  originAndDestinationPrice: '',
  plan: '',
  minutes: ''
}

const validationSchema = Yup.object({
  originAndDestinationPrice: Yup.number().required(),
  plan: Yup.number().required(),
  minutes: Yup.number().positive().required()
})

interface Props {
  onSubmit: (
    minutes: string,
    originAndDestinationPrice: string,
    plan: string
  ) => void
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ minutes, originAndDestinationPrice, plan }) => {
      onSubmit(minutes, originAndDestinationPrice, plan)
    }
  })

  return (
    <form onSubmit={handleSubmit} id="form">
      <div className="form-group ">
        <label
          htmlFor="originAndDestinationPrice"
          className="col-form-label font-weight-bold"
        >
          Selecione os DDDs de horigem e destino
        </label>
        <select
          data-testid="originAndDestinationPrice"
          className="form-select"
          name="originAndDestinationPrice"
          id="originAndDestinationPrice"
          value={values.originAndDestinationPrice}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option>DDDs</option>
          <option value={1.9}>011 &rArr; 016</option>
          <option value={2.9}>016 &rArr; 011</option>
          <option value={1.7}>011 &rArr; 017</option>
          <option value={2.7}>017 &rArr; 011</option>
          <option value={0.9}>011 &rArr; 018</option>
          <option value={1.9}>018 &rArr; 011</option>
        </select>
      </div>
      <div className="form-group ">
        <label htmlFor="plan" className="col-form-label font-weight-bold">
          Selecione os DDDs de horigem e destino
        </label>
        <select
          className="form-select"
          name="plan"
          id="plan"
          value={values.plan}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="plan"
        >
          <option>Planos</option>
          <option value={30}>Fale mais 30</option>
          <option value={60}>Fale mais 60</option>
          <option value={120}>Fale mais 120</option>
        </select>
      </div>
      <div className="form-group ">
        <label htmlFor="minutes" className="col-form-label font-weight-bold">
          Duração da ligação em minutos
        </label>
        <input
          type="number"
          className="form-control"
          name="minutes"
          id="minutes"
          min="1"
          step="1"
          value={values.minutes}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Minutos"
          data-testid="minutes"
        />
      </div>

      <button type="submit" className="btn btn-primary  mt-3">
        Calcular
      </button>
    </form>
  )
}
