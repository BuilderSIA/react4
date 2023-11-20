import Data from "./Data";


export default function Main({list, removeCard}) {
  return (
    <main>
        <div className="container">
            <h2 className="title">Все туры</h2>
            <ul className="list">
                {list.map((item) => <Data key={item.id} {...item} removeCard={removeCard} />)}
            </ul>
        </div>
    </main>
  )
}
