import { root } from "../../../../utils/endPoints";

function View({ title = '', data }) {
  return (
    <div className='h-96 mt-6 border rounded'>
      <img
        className='h-96 mx-auto object-cover rounded'
        src={`${root.imgUrl}/document/${data.img.name}`}
        alt={title + " Document"}
      />
    </div>
  )
}

export default View