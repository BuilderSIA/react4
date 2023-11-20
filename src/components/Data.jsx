import like from '../../public/images/like.png'


export default function Data({id, name, image, removeCard, setItem}) {
  return (
    <li className="list-item">
        <img src={like} alt="" className='like-icon' />
        <img src={image} alt="" width={320} height={320} />
        <h2>{name}</h2>
        <button>Заказать</button>
        <button id='remove' onClick={() => removeCard(id)}>Удалить</button>
    </li>
  )
}
