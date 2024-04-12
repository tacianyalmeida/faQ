const ButtonModal = ({text, setModal, modal,img }) =>{
return(
    <button onClick={()=> setModal(!modal)}>{text} {img} </button>
)
}
export default ButtonModal;