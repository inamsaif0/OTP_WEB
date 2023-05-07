import Home from './home/index'


export default function Layout({children}){
    return (
        <div>
            <Home/>
            {   
                children
            }
        </div>
    )
}