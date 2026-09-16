import { useEffect, useState } from 'react'

function useAsync<T>(asyncFunction: (() => Promise<T>)| null) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(asyncFunction !== null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
      if (!asyncFunction) {
        return
  }
    let active = true
    asyncFunction().then((result) => {
        if (active) {
          setData(result)
        }
      }).catch((error) => {
        if (active) {
          setError(error.message)
        }
      }).finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [asyncFunction])

  return { data, loading, error }
}

export default useAsync