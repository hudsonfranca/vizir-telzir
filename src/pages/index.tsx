import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  IndexContainer,
  SectionOne,
  SectionTwo,
  Text,
  SectionTitle,
  CardContainer,
  SectionThree,
  SectionFour,
  FormContainer,
  Result
} from '../styles/home'

import { Card, CardTitle, CardBody } from '../components/Card'

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

export default function Home() {
  const [resultWithoutPlan, setResultWithoutPlan] = useState<number>(0)
  const [resultWithPlan, setResultWithPlan] = useState<number>(0)

  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL'
  })

  const { handleBlur, handleChange, handleSubmit, values, resetForm } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: ({ minutes, originAndDestinationPrice, plan }) => {
        if (minutes > plan) {
          const percentage = 0.1 * parseFloat(originAndDestinationPrice)

          const minutePrice = percentage + parseFloat(originAndDestinationPrice)

          const excessMinutes = parseInt(minutes) - parseInt(plan)

          setResultWithPlan(excessMinutes * minutePrice)
          setResultWithoutPlan(
            parseInt(minutes) * parseFloat(originAndDestinationPrice)
          )
          resetForm()
        } else {
          setResultWithoutPlan(
            parseInt(minutes) * parseFloat(originAndDestinationPrice)
          )
          setResultWithPlan(0)
          resetForm()
        }
      }
    })

  return (
    <>
      <Head>
        <title>Telzir</title>
      </Head>
      <IndexContainer>
        <SectionOne>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            assumenda explicabo at soluta aspernatur, possimus placeat!
          </Text>
        </SectionOne>

        <SectionTwo id="plans">
          <SectionTitle color="#000">Confira os nossos planos</SectionTitle>

          <CardContainer>
            <Card bgimageUrl="/phone1.jpg">
              <CardTitle>Fale Mais 30</CardTitle>
              <CardBody>
                30 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
            <Card bgimageUrl="/phone2.jpg">
              <CardTitle>Fale Mais 60</CardTitle>
              <CardBody>
                60 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
            <Card bgimageUrl="/phone3.jpg">
              <CardTitle>Fale Mais 120</CardTitle>
              <CardBody>
                120 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
          </CardContainer>
        </SectionTwo>
        <SectionThree id="about">
          <SectionTitle color="#ffff">Sobre nós</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nobis veritatis corporis voluptates id architecto vero repudiandae
            omnis fugit veniam consectetur libero, itaque porro facere similique
            laboriosam odit ad asperiores harum fugiat amet pariatur impedit
            excepturi. Eum temporibus assumenda ratione!
          </p>
        </SectionThree>
        <SectionFour id="comparePlans">
          <FormContainer>
            <SectionTitle color="#000">Compare os nossos planos</SectionTitle>
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <label
                  htmlFor="originAndDestinationPrice"
                  className="col-form-label font-weight-bold"
                >
                  Selecione os DDDs de horigem e destino
                </label>
                <select
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
                <label
                  htmlFor="plan"
                  className="col-form-label font-weight-bold"
                >
                  Selecione os DDDs de horigem e destino
                </label>
                <select
                  className="form-select"
                  name="plan"
                  id="plan"
                  value={values.plan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Planos</option>
                  <option value={30}>Fale mais 30</option>
                  <option value={60}>Fale mais 60</option>
                  <option value={120}>Fale mais 120</option>
                </select>
              </div>
              <div className="form-group ">
                <label
                  htmlFor="minutes"
                  className="col-form-label font-weight-bold"
                >
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
                />
              </div>

              <button type="submit" className="btn btn-primary  mt-3">
                Calcular
              </button>
            </form>
            <Result>
              <Card bgimageUrl="">
                <CardTitle>Com o fale mais</CardTitle>
                <CardBody>{formatter.format(resultWithPlan)}</CardBody>
              </Card>
              <Card bgimageUrl="">
                <CardTitle>Sem o fale mais</CardTitle>
                <CardBody>{formatter.format(resultWithoutPlan)}</CardBody>
              </Card>
            </Result>
          </FormContainer>
        </SectionFour>
      </IndexContainer>
    </>
  )
}
