
function filterCategories(data) {
    const categories = data.reduce((prev, current) => {
      let val = [...prev, current.category]
      return val
    }, [])

    const newCateries = categories.filter((item, position) => {
      return categories.indexOf(item) == position
    }, [])

    return newCateries
  }
function filterTypes(data) {
    const categories = data.reduce((prev, current) => {
      let val = [...prev, current.type]
      return val
    }, [])

    const newCateries = categories.filter((item, position) => {
      return categories.indexOf(item) == position
    }, [])

    return newCateries
  }
function filterActivities(data) {
    const categories = data.reduce((prev, current) => {
      let val = [...prev, current.activity]
      return val
    }, [])

    const newCateries = categories.filter((item, position) => {
      return categories.indexOf(item) == position
    }, [])

    return newCateries
  }

  export { filterCategories, filterTypes, filterActivities }

