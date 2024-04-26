import React, { useEffect, useState } from 'react'
import './Cart.scss'
import ShopCartItem from '../Components/Cart_/ShopCartItem'

const Cart = ({ games, reference }) => {

  const [total, setTotal] = useState (0)

  const handleTotalPayment = () => {
    return games
    .map (game => game.price * (1 - game.discount))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2)
  }

  useEffect (() => {
    setTotal (handleTotalPayment())
  }, [games])

  return (
    <section id='cart' className='cart' ref={reference}>

      <div className='container-fluid'>
        <span className='row mb-3'>
          <h1>Meu Carrinho</h1>
        </span>
      </div>

      {games.length === 0 ? (
        <h2 className='subTitle'>Seu carrinho está vazio.</h2>
      ) : (
        <>
          <div className='row'>
            <div className='table-responsive'>
              <table className='shopCartTable table table-borderless align-middle'>

                <thead>
                  <tr>
                    <th scope='col'>Nº</th>
                    <th scope='col'>Visualização</th>
                    <th scope='col'>Jogo</th>
                    <th scope='col'>Preço</th>
                    <th scope='col'>Desconto</th>
                    <th scope='col'>Pagamento</th>
                    <th scope='col'>Excluir</th>
                  </tr>
                </thead>

                <tbody>
                  {games.map((game, index) => (
                    <ShopCartItem index={index} key={game._id} game={game} />
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          <div className='total'>

            <div>
              <p className='itemCount'>Total de Itens: {games.length}</p>
            </div>

            <div>
              <span className='payment'>
                Total: ${total}
                <a href='#'>
                  Confira <i className='bi bi-wallet-fill' />
                </a>
              </span>
            </div>

          </div>
        </>
      )}

    </section>
  )
}

export default Cart
