import React, { useContext } from 'react'
import { StockContext, UserContext } from '../App'

const ChildC = () => {
    const StockData = useContext(StockContext)
    const UserData = useContext(UserContext)
  return (
    <>
    {/* <StockContext.Consumer>
        {
            ({stock, price}) => {
                return (
                    <UserContext.Consumer>
                        {
                            ({user}) => {
                                return (
                                    <>
                                        <h2>User: {user.name}</h2>
                                        <h2>Logged In: {user.isLoggedIn}</h2>
                                        <h2>ChildC - {stock}: {price}</h2>
                                    </>
                                )
                            }
                        }
                    </UserContext.Consumer>
                )
            }
        }
    </StockContext.Consumer> */}
    <h2>User: {UserData.user.name}</h2>
    <h2>Is LoggedIn: {UserData.user.isLoggedIn}</h2>
    <h2>ChildC - {StockData.stock}</h2>

    </>
  )
}

export default ChildC