import React from 'react'
import EvaluationPlans from '@/components/Home/EvaluationPlans'
import Csat from '@/components/Home/Csat'
import ToppersCopies from '@/components/Home/ToppersCopies'
import HomePage from '@/components/Home/HomePage'
const page = () => {
  return (
    <div>
      <HomePage/>
      <EvaluationPlans/>
      <Csat/>
      <ToppersCopies/>
    </div>
  )
}

export default page
