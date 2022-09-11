import { root } from "../../../../utils/endPoints";

function View({ title = '', data }) {
  return (
    <>
      <div className='h-80 my-4 border rounded'>
        <img
          className='h-80 mx-auto object-cover rounded'
          src={`${root.imgUrl}/document/${data.img.name}`}
          alt={title + " Document"}
        />
      </div>

      <textarea
        className="max-h-20"
        defaultValue={data?.img?.remarks || ""}
        disabled
      ></textarea>
    </>
  )
}

export default View