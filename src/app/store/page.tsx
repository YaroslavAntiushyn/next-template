'use client'
import Counter from '@/components/atoms/Counter'
// import { Store } from '@/components/shared/stores/store'
import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'

const StorePage: NextPage = observer(() => {
  return (
    <>
      <Counter />
    </>
  )
})

export default StorePage
