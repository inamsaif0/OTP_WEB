import Home from './home/index'
import styles from '../styles/layour.module.css'

export default function Layout({children}){
    return (
        <div className = {styles.layout}>
            <Home/>
            {   
                children
            }
        </div>
    )
}