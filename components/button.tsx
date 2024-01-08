type Props = {
    text : string;
    clickHandler : ()=>void;
}
export default function button({text, clickHandler} : Props){

    return <button onClick={clickHandler}>{text}</button>
}