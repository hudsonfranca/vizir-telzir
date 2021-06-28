import { calculateCallCost } from '../calculateCallCost'

test('must return the correct cost of a phone call', () => {
  const { costWithPlan, costWithoutPlan } = calculateCallCost(
    '200',
    '1.9',
    '120'
  )

  expect(costWithPlan).toBe(167.2)
  expect(costWithoutPlan).toBe(380.0)
})
