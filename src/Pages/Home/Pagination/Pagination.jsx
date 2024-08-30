import ReactPaginate from 'react-paginate';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import './Pagination.css';

function Pagination() {

    const handlePageClick = (data) => {
        console.log(data.selected + 1)
    }
    const pageCount = 9;

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel={<span className={`${ pageCount === 8 ? 'opacity-[0.5] cursor-not-allowed' : 'opacity-[1] hover:bg-blue hover:text-white text-blue'} flex items-center gap-2 bg-offWhite px-4 py-2 rounded-md  transition-all duration-300 ease-in-out `}>Next<FaArrowRight className="right"/></span>}
    marginPagesDisplayed={2}
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel={<span className={`${ pageCount === 1 ? 'opacity-[0.5] cursor-not-allowed' : 'opacity-[1] hover:bg-blue hover:text-white text-blue'} flex items-center gap-2 bg-offWhite text-blue px-4 py-2 rounded-md  transition-all duration-300 ease-in-out`}><FaArrowLeft className="left"/>Previous</span>}
    renderOnZeroPageCount={null}
    className='flex gap-4 text-center items-center justify-center relative font-secondry'
    pageClassName=' cursor-pointer rounded-md bg-offWhite'
    pageLinkClassName='w-[40px] h-[40px] flex items-center justify-center text-blue hover:text-white hover:bg-blue rounded-md transition-all duration-300'
    previousClassName=' text-white rounded-md prev'
    nextClassName='text-blue rounded-md next'
    breakClassName='rounded-md bg-offWhite text-[#23262A]'
    breakLinkClassName='w-[40px] h-[40px] block flex items-center justify-center text-blue'
    activeLinkClassName='bg-blue text-white'
  />
  );
}

export default Pagination;