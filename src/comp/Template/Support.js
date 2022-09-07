import supportImg from '../../assets/svg/common/support2.svg';

function Support() {
  return (
    <section className='df gap-12 h-full p-8 overflow-y-hidden bg-[#f7f7f7]'>
      <div className='flex-1'>
        <h1 className='mb-4 text-xl font-medium text-center'>Submit a Request</h1>

        <textarea
          className="mb-8 max-w-xl mx-auto h-80"
          placeholder='Enter your queries...'
        ></textarea>

        <button
          className="w-40 block mx-auto bg-[#6e5bc5] text-white hover:bg-[#3d3565]"
        >
          Submit
        </button>
      </div>

      <div className='df px-8 mr-8 h-[inherit]'>
        <img
          className='w-96'
          src={supportImg}
          alt="Support"
        />
      </div>
    </section>
  )
}

export default Support