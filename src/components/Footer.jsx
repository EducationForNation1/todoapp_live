
const date = new Date();

function Footer(){
    // console.log(date.getFullYear())
    return(
        <footer>  
            
            <p>Copyright {date.getFullYear()}</p>
        </footer>
    )
}


export default Footer;