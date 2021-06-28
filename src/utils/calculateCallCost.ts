export const calculateCallCost = (
  minutes: string,
  originAndDestinationPrice: string,
  plan: string
) => {
  if (minutes > plan) {
    const percentage = 0.1 * parseFloat(originAndDestinationPrice)

    const minutePrice = percentage + parseFloat(originAndDestinationPrice)

    const excessMinutes = parseInt(minutes) - parseInt(plan)

    const costWithPlan = excessMinutes * minutePrice
    const costWithoutPlan =
      parseInt(minutes) * parseFloat(originAndDestinationPrice)

    return { costWithPlan, costWithoutPlan }
  } else {
    const costWithPlan = 0
    const costWithoutPlan =
      parseInt(minutes) * parseFloat(originAndDestinationPrice)

    return { costWithPlan, costWithoutPlan }
  }
}
