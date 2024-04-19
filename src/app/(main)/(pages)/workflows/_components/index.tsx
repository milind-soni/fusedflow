import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4"> 
    <section className='flex flex-col gap-4 p-2'>
    <Workflow 
    description='Creating a Test UDF automation' 
    id='12332169' 
    name='Udf Automation' 
    publish = {false} />
    </section>
    </div>
  )
}

export default Workflows