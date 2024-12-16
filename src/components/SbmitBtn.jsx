import React from 'react'
import { useNavigation } from 'react-router-dom'

const SbmitBtn = ({text,block}) => {
  const navigate = useNavigation()
  const isSubmitting = navigate.state === 'submitting'
  return (
    <button type='submit' className={`btn btn-primary text-lg ${block}`} disabled={isSubmitting}>{isSubmitting ? 'Submittiing' : text || 'Submit' } {isSubmitting && <span className="loading loading-spinner loading-xs"></span>}</button>
  )
}

export default SbmitBtn