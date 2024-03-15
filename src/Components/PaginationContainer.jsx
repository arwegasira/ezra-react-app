import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
const PaginationContainer = () => {
  const { pageCount, page } = useLoaderData()

  //page array
  const pages = Array.from({ length: pageCount }, (_, idx) => {
    return idx + 1
  })
  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePagination = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }
  if (pageCount < 2) return null
  return (
    <section className='mt-12 mb-14 flex justify-center'>
      <div className=' join rounded'>
        <button
          className='join-item btn btn-xs sm:btn-md'
          onClick={() => {
            const pageNumber = page === 1 ? pageCount : page - 1
            return handlePagination(pageNumber)
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`join-item btn btn-xs sm:btn-md ${
                pageNumber === page ? 'btn-active' : ''
              }`}
              key={pageNumber}
              onClick={() => handlePagination(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          className='join-item btn btn-xs sm:btn-md'
          onClick={() => {
            const pageNumber = page === pageCount ? 1 : page + 1
            return handlePagination(pageNumber)
          }}
        >
          Next
        </button>
      </div>
    </section>
  )
}
export default PaginationContainer
